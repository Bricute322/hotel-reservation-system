<template>
  <q-page class="flex flex-center">
    <q-card style="width: 500px; border-radius: 15px" class="q-pa-md">
      <q-card-section
        ><div class="text-h4 q-py-none">Book Now !</div></q-card-section
      >
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input outlined label="Hotel Name" />
          <q-select
            v-model="rooms"
            :options="options"
            outlined
            label="Room Types"
          />
          <q-input outlined label="Guest Details" type="textarea" /> </q-form
      ></q-card-section>
      <q-card-actions>
        <q-btn style="border-radius: 10px" color="primary" label="Submit" />
        <q-btn
          style="border-radius: 10px"
          outline
          color="primary"
          label="Cancel"
        />
      </q-card-actions> </q-card
  ></q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "BookForm",
  setup() {
    return {
      rooms: ref(null),
      options: [
        "Deluxe",
        "Singe",
        "Double",
        "Triple",
        "Quad",
        "Queen",
        "King",
        "Twin",
        "Holywood Twin Room",
        "Double-double",
        "Studio",
        "Suite/Executing Suite",
        "Mini Suite",
        "President Suite",
        "Apartments",
        "Connecting Rooms",
        "Murphy Room Accessible Room",
        "Cabana",
        "Adjoining Rooms",
        "Adjacent Rooms",
        "Villa",
        "Executive Floor",
        "Smoking / Non-Smoking Room",
      ],
    };
  },
};
</script>

<style scoped></style>
