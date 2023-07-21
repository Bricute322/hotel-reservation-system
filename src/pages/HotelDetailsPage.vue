<template>
  <q-page>
    <div class="col flex justify-center">
      <!-- <q-card style="width: 500px; height: 150px">
          <q-card-section horizontal>
            <q-card-section class="q-px-none">
              <img
                class="q-pa-md"
                src="https://cdn.quasar.dev/img/avatar.png"
                style="
                  width: auto;
                  height: auto;
                  max-height: 140px;
                  max-width: 200px;
                "
            /></q-card-section>
            <q-card-section class="q-px-none">
              <div class="text-h5 q-mt-sm q-mb-xs">
                Hotel name
              </div></q-card-section
            >
            <q-card-section>
              <div class="text-caption text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div></q-card-section
            >
          </q-card-section>
        </q-card> -->
      <HotelDetailCard />
    </div>
  </q-page>
</template>
<script>
import HotelDetailCard from "../components/HoteDetailsCard.vue";
export default {
  name: "HotelDetailsPage",
  components: {
    HotelDetailCard,
  },
};
</script>

<style></style>
