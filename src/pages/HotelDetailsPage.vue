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
              :src="hotelInformation.hotel_image"
            />
          </div>
          <q-card-section horizontal>
            <q-card-section>
              <div class="text-h5 q-mt-sm q-mb-xs text-primary">
                {{ hotelInformation.hotel_name }}
              </div>
              <div class="text-subtitle1">
                <q-icon name="location_on" size="sm" color="primary" />
                {{ hotelInformation.location }}
              </div>
              <div class="text-subtitle1">
                <q-icon name="room_service" size="sm" color="primary" />
                {{ hotelInformation.description }}
              </div>
            </q-card-section>
          </q-card-section>
          <q-separator inset />
          <div v-for="items in roomInformation" :key="items.uid">
            <RoomDetailsComponent :room="items" />
            <q-separator inset />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import RoomDetailsComponent from "../components/RoomCard.vue";
import { onMounted, ref, getCurrentInstance } from "vue";
import { api } from "../boot/axios";
export default {
  name: "HotelDetailsPage",
  components: { RoomDetailsComponent },
  setup() {
    const roomInformation = ref([]);
    const hotelInformation = ref([]);
    const showDialogBook = ref(false);
    const route = getCurrentInstance().proxy.$route;
    onMounted(async () => {
      api.defaults.headers.common["Authorization"] =
        localStorage.getItem("token");
      api.defaults.headers.common["api-secret-key"] = process.env.API_SECRET;
      try {
        const responseHotelDetails = await api.get(
          `/client/hotels/details/?uid=${route.params.uid}`
        );
        hotelInformation.value = responseHotelDetails.data.data;

        const responseRoomDetails = await api.get(
          `/client/rooms/list/?uid=${route.params.uid}`
        );
        roomInformation.value = responseRoomDetails.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
    return {
      roomInformation,
      hotelInformation,
      showDialogBook,
    };
  },
  computed: {},
  methods: {
    showBook() {
      this.showDialogBook = true;
    },
  },
};
</script>

<style scoped></style>
