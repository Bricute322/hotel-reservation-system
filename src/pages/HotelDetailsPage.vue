<template>
  <q-page>
    <div class="row">
      <div class="col flex flex-center">
        <q-card
          style="width: auto; max-width: 1000px; height: auto"
          flat
          bordered
        >
          <div class="flex flex-center q-pt-md q-px-md">
            <img
              style="width: 400px"
              class="q-pa-md"
              src="https://cdn.quasar.dev/img/mountains.jpg"
            />
          </div>
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
                <q-icon name="location_on" size="sm" color="primary" />
                {{ location }}
              </div>
              <div class="text-subtitle1">
                <q-icon name="room_service" size="sm" color="primary" />
                {{ description }}
              </div>
            </q-card-section>
            <!-- <q-dialog v-model="dialogVisible">
              <q-card>
                <q-card-section>
                  {{ description }}
                </q-card-section>
                <q-btn @click="closeDialog" label="Close" />
              </q-card>
            </q-dialog> -->
            <!-- <q-card-actions class="flex flex-center q-ml-lg"
              ><q-btn
                color="primary"
                label="Select Rooms"
                align="between"
                icon-right="hotel"
            /></q-card-actions> -->
          </q-card-section>
          <q-separator inset />
          <!-- Second -->
          <q-card class="card-two">
            <q-card-section horizontal class="q-px-md">
              <q-card-section class="col-2 flex flex-center">
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg"
              /></q-card-section>
              <q-card-section>
                <div class="text-overline text-primary">Room Information</div>
                <div class="text-h5">Room Type</div>
                <div class="text-subtitle1">
                  <q-icon name="night_shelter" size="sm" color="primary" />Room
                  Number
                  <strong>{{ roomNumber }}</strong>
                </div>
                <div class="text-subtitle1">
                  <q-icon name="door_back" size="sm" color="primary" />We have
                  available {{ availableRooms }} Rooms
                </div>
              </q-card-section>
              <q-separator vertical inset />
              <q-card-section>
                <div class="text-overline text-primary">Sleep</div>
                <div class="text-subtitle1 q-px-xl">
                  <q-icon name="person" />x{{ person }}
                </div></q-card-section
              >
              <q-separator vertical inset />
              <q-card-actions class="flex flex-center q-ml-xl col self-center">
                <q-btn
                  color="primary"
                  label="Book your Room"
                  align="between"
                  icon-right="hotel"
              /></q-card-actions> </q-card-section
          ></q-card>
          <q-separator inset />
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from "vue";
export default {
  name: "HotelDetailsPage",
  setup() {
    return {
      person: ref("5"),
      roomNumber: ref("87"),
      availableRooms: ref("5"),
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

<style scoped>
.card-two {
  background-color: transparent;
}
</style>
