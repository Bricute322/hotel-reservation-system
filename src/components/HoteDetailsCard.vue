<template>
  <!-- <q-img class="q-pa-md" src="https://cdn.quasar.dev/img/avatar.png" /> -->
  <q-card style="width: auto; max-width: 1000px; height: auto">
    <q-card-section horizontal>
      <!-- <q-card-section>
            <q-img
              style="width: 100px"
              class="q-pa-md"
              src="https://cdn.quasar.dev/img/avatar.png"
          /></q-card-section> -->
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs text-primary">
          Hotel name - {{ location }}
        </div>
        <div class="text-subtitle1">
          <q-icon name="location_on" />
          {{ location }}
        </div>
        <div class="text-subtitle1" v-if="showFullDescription">
          <q-icon name="room_service" /> {{ description }}
        </div>
        <div v-else>
          {{ truncatedDescription }}
          <q-btn @click="showDialog" label="Show More" color="primary" flat />
        </div>
      </q-card-section>
      <q-dialog v-model="dialogVisible">
        <q-card>
          <q-card-section>
            {{ description }}
          </q-card-section>
          <q-btn @click="closeDialog" label="Close" />
        </q-card>
      </q-dialog>
      <q-card-actions class="flex flex-center q-ml-lg"
        ><q-btn
          color="primary"
          label="Select Rooms"
          align="between"
          icon-right="hotel"
      /></q-card-actions>
    </q-card-section>
    <q-card-section horizontal>
      <q-card-section></q-card-section>
    </q-card-section>
  </q-card>
  <!-- <q-card class="q-px-none">
        <img
          class="q-pa-md"
          src="https://cdn.quasar.dev/img/avatar.png"
          style="
            width: auto;
            height: auto;
            max-height: 140px;
            max-width: 200px;
          "
      /></q-card> -->
</template>

<script>
import { ref } from "vue";
export default {
  name: "HotelDetailCard",
  setup() {
    return {
      location: ref("Manila"),
      description: ref(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed massa pellentesque, molestie odio in, ultricies arcu. Curabitur in purus iaculis, ultricies felis sed, dictum massa."
      ),
      showFullDescription: ref(false),
      dialogVisible: ref(false),
    };
  },
  computed: {
    truncatedDescription() {
      const maxLength = 50; // Change this value as per your requirement
      if (this.description.length <= maxLength) {
        return this.description;
      }
      return this.description.substring(0, maxLength) + "...";
    },
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style></style>
