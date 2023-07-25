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
    // axios.defaults.headers.common["X-Api-Secret-Key"] =
    //   "998c252dbd701945b097c603d3421a73442283abfab86f787f2d8adc75e9c4ac";
    // const apiInstance = axios.create({
    //   baseURL: "http://127.0.0.1:8000",
    //   headers: {
    //     "X-Api-Secret-Key": "your_api_secret_key_here",
    //   },
    // });
    onMounted(async () => {
      try {
        const response = await api.get(`client/booking/list/`, {
          headers: {
            api_secret:
              "998c252dbd701945b097c603d3421a73442283abfab86f787f2d8adc75e9c4ac",
          },
        });
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
