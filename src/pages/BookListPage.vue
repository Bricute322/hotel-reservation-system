<template>
  <q-page class="flex flex-center">
    <div v-for="item in bookingList" :key="item.uid">
      <BookingListCard :bookingRecords="item" />
    </div>
  </q-page>
</template>

<script>
import BookingListCard from "src/components/BookingListCard.vue";
import { ref, onMounted } from "vue";
import { api } from "../boot/axios";
export default {
  name: "BookListPage",
  components: {
    BookingListCard,
  },
  setup() {
    const bookingList = ref({});
    onMounted(async () => {
      try {
        api.defaults.headers.common["Authorization"] =
          localStorage.getItem("token");
        api.defaults.headers.common["api-secret-key"] = process.env.API_SECRET;
        const response = await api.get(`client/booking/list/`);
        bookingList.value = response.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
    return { bookingList };
  },
};
</script>

<style></style>
