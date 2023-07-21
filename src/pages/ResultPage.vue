<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card bordered style="width: 975px" class="q-pa-md shadow-10">
        <q-card-section horizontal>
          <q-img class="col-4" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          <q-card-section>
            <div class="text-h3 q-mt-sm q-mb-xs">Sogo</div>
            <div class="text-h5 text-light-blue-6">
              <q-icon size="20px" name="location_on" />Bertese, Quezon, Nueva
              Ecija
            </div>
            <div class="text-overline text-light-blue">
              <q-icon color="light-blue" size="xs" name="king_bed" /> Queen Bed
              | <q-icon size="xs" color="light-blue" name="person" /> 2 Rooms
              available
            </div>
            <div class="text-subtitle2 text-black">lorem</div>
          </q-card-section>
          <q-card-actions class="flex justify-end">
            <div class="col self-end">
              <div class="text-h4 text-right">PHP5555</div>
              <q-btn
                @click="result"
                color="light-blue"
                class="btn-fixed-width"
                icon-right="chevron_right"
                label="Check Availability"
              />
            </div>
          </q-card-actions>
        </q-card-section>
      </q-card></div
  ></q-page>
</template>

<script>
export default {
  name: "ResultPage",
  setup() {
    return {};
  },
  methods: {
    result() {
      this.$router.push({ path: "/details" });
    },
  },
};
</script>

<style lang="sass" scoped>
.btn-fixed-width
  width: 250px
</style>
