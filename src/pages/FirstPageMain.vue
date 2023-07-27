<template>
  <q-page>
    <div class="row">
      <div class="col">
        <q-parallax
          src="../assets/BG.jpg"
          style="margin-left: auto; margin-right: auto; display: block"
        >
          <div class="flex flex-center">
            <WelcomeComponent
              class="q-ma-sm q-pa-md q-gutter-sm"
              :class="{
                'text-h6': $q.screen.width > 600,
                'text-subtitle1': $q.screen.width <= 600,
              }"
            />
          </div>
        </q-parallax>
      </div>
    </div>

    <div class="row">
      <div class="col col6 q-py-md">
        <SearchComponent />
      </div>
      <div class="col col6 gt-sm">
        <div class="text-h3 text-bold text-black q-mt-xl q-pb-lg">Hotello</div>
        <div class="text-h5">
          Embarking on a quest for comfort and luxury - Seeking the perfect
          hotel haven!
        </div>
      </div>
    </div>
    <!-- Second Page -->
    <div class="row">
      <div class="text-h3 q-px-md q-pt-md">Popular Hotels</div>
    </div>
    <div class="row">
      <div
        class="col-12 col-md col-sm q-px-md q-py-md flex flex-center"
        v-for="item in data"
        :key="item.uid"
      >
        <PopularHotelsCard :hotelDetails="item" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
import WelcomeComponent from "../components/Welcome.vue";
import SearchComponent from "../components/Search.vue";
import PopularHotelsCard from "src/components/PopularHotelsCard.vue";
import { onMounted, ref } from "vue";
import { api } from "../boot/axios";
export default {
  name: "FirstPage",
  components: {
    SearchComponent,
    WelcomeComponent,
    PopularHotelsCard,
  },
  setup() {
    const data = ref(null);
    onMounted(async () => {
      try {
        const response = await api.get(`client/hotels/list/`);
        data.value = response.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
    return {
      data,
    };
  },
  methods: {
    ...mapActions("auth", ["testAction"]),
    async test() {
      await this.testAction();
    },
  },
};
</script>
<style lang="sass" scoped></style>
