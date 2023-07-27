<template>
  <q-page class="flex flex-center">
    <BookFormComponent />
  </q-page>
</template>

<script>
import BookFormComponent from "../components/BookFormCard.vue";
import { ref } from "vue";
export default {
  name: "BookForm",
  components: { BookFormComponent },
  setup() {
    return {
      rooms: ref(null),
    };
  },
};
</script>

<style scoped></style>
