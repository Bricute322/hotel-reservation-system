<template>
  <q-page class="bg-deep-purple-1">
    <!-- FirstPage -->

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
    <div class="q-py-md">
      <SearchComponent />
    </div>
    <!-- Second Page -->
    <div class="row">
      <div class="col-6 text-h5 text-bold q-px-md q-pt-md">Popular Hotels</div>
      <div class="flex justify-end col-6 q-px-md q-pt-md">See all</div>
    </div>
    <div class="row">
      <div
        class="col-12 col-md q-px-md q-pt-md"
        v-for="item in data"
        :key="item.uid"
      >
        <PopularHotelsCard :hotelDetails="item" />
      </div>
    </div>
    <!-- Third Page -->
    <div class="row">
      <div class="col-12 text-h5 text-bold q-px-md q-pt-md">
        Trending Destination
      </div>
      <div class="text-subtitle1 q-px-md">
        Discover Some Good Places from the Philippines!
      </div>
      <div class="col-12 col-md q-px-md q-pt-md">
        <DiscoverComponent />
      </div>
    </div>
  </q-page>
</template>

<script>
import WelcomeComponent from "../components/Welcome.vue";
import SearchComponent from "../components/Search.vue";
import DiscoverComponent from "../components/Discover.vue";
import PopularHotelsCard from "src/components/PopularHotelsCard.vue";
import { ref } from "vue";
export default {
  name: "FirstPage",
  components: {
    DiscoverComponent,
    SearchComponent,
    WelcomeComponent,
    PopularHotelsCard,
  },
  setup() {
    const data = ref(null);
    return {
      showBookingDialog: ref(false),
      expanded: ref(false),
      data,
    };
  },

  methods: {
    fetchData() {
      this.$api
        .get("client/hotels/list/")
        .then((response) => {
          this.data = response.data.data;
          this.hotelImage = response.data.data.hote_image;
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
<style lang="sass" scoped>
.availability-card
  width: 100%
  max-width: 350px
</style>
