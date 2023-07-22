<template>
  <q-card class="q-pa-md availability-card">
    <q-img :src="hotelDetails.hotel_image" />
    <q-card-section>
      <div class="text-overline text-light-blue-6">
        <q-icon size="20px" name="location_on" /> {{ hotelDetails.location }}
      </div>
      <div class="text-h5 q-mt-sm q-mb-xs text-bold">
        {{ hotelDetails.hotel_name }}
      </div>
      <div class="text-subtitle1 text-bold">
        Available Rooms:
        <q-chip color="teal" text-color="white" icon="check">10</q-chip>
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn flat color="primary" label="Share" disable />
      <q-btn flat color="secondary" label="Book" />
      <q-space />
      <q-btn
        color="grey"
        round
        flat
        dense
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"
      />
    </q-card-actions>

    <q-slide-transition>
      <div v-show="expanded">
        <q-separator />
        <q-card-section class="text-subitle2">{{
          hotelDetails.description
        }}</q-card-section>
      </div>
    </q-slide-transition>
  </q-card>
</template>
<script>
// import { api } from "boot/axios";
// import { useQuasar } from "quasar";

import { ref } from "vue";
export default {
  name: "PopularHotelsComponent",
  props: {
    hotelDetails: Object,
    default: () => {},
  },
  setup() {
    // const data = ref(null);
    return {
      showBookingDialog: ref(false),
      expanded: ref(false),
      //   data,
    };
  },
  computed: {
    banner() {
      return this.hotelDetails.hotel_image;
    },
  },
  //   mounted() {
  //     this.fetchData();
  //   },
  //   methods: {
  //     fetchData() {
  //       this.$api
  //         .get("client/hotels/list/")
  //         .then((response) => {
  //           this.data = response.data.data;
  //           console.log(response.data);
  //         })
  //         .catch((error) => {
  //           console.error("Error fetching data:", error);
  //         });
  //     },
  //   },
};
</script>

<style lang="sass" scoped>
.availability-card
  width: 100%
  max-width: 350px
</style>
