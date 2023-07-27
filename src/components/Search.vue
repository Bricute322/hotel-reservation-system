<template>
  <div class="flex flex-center">
    <q-card
      boredered
      class="shadow-10 q-pa-md"
      style="width: 500px; border-radius: 15px"
    >
      <q-form ref="searchFilter" submit.prevent="search">
        <q-card-section class="q-gutter-sm">
          <q-input
            v-model="searchInformation.location"
            outlined
            label="Location"
          />
          <div class="row">
            <div class="col q-pr-sm">
              <q-input
                outlined
                v-model="searchInformation.check_in"
                label="Check IN"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date today-btn v-model="searchInformation.check_in">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="ok"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col q-pl-sm">
              <q-input
                outlined
                v-model="searchInformation.check_out"
                label="Check OUT"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date today-btn v-model="searchInformation.check_out">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="ok"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
          <div>
            <q-input
              outlined
              v-model="searchInformation.total_guest"
              type="number"
              label="Quantity"
            >
              <template v-slot:append>
                <q-icon name="keyboard_arrow_up" @click="incrementQuantity" />
                <q-icon name="keyboard_arrow_down" @click="decrementQuantity" />
              </template>
            </q-input>
          </div>
          <q-separator inset />
          <q-card-actions class="q-pa-none">
            <q-btn
              class="full-width"
              icon="search"
              @click="search"
              color="primary"
              ><div class="text-subtitle1">search</div></q-btn
            ></q-card-actions
          >
        </q-card-section>
      </q-form>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapActions } from "vuex";
export default {
  name: "SearchComponent",
  name: "FirstPage",
  setup() {
    const searchInformation = ref({
      location: null,
      total_guest: null,
      dateRange: null,
      check_in: null,
      check_out: null,
    });
    const dateRange = ref({ check_in: "2022/01/01", check_out: "2022/01/05" });
    return {
      dateRange,
      searchInformation,
    };
  },
  data() {
    return {
      quantity: ref(""),
    };
  },
  methods: {
    ...mapActions("search", ["searchHotels"]),
    incrementQuantity() {
      this.searchInformation.total_guest++;
    },
    decrementQuantity() {
      if (this.searchInformation.total_guest > 1) {
        this.searchInformation.total_guest--;
      }
    },
    async search() {
      if (this.$refs.searchFilter.validate()) {
        await this.searchHotels(this.searchInformation);
        this.$router.push({ path: "/result" });
      }
    },
  },
};
</script>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
