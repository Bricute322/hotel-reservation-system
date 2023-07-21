<template>
  <q-page class="flex flex-center">
    <q-card style="width: 500px; border-radius: 15px" class="q-pa-md">
      <q-card-section class="q-pb-none"
        ><div class="text-h4">Book Now !</div></q-card-section
      >
      <q-card-section>
        <q-form class="q-gutter-md">
          <!-- <q-input outlined label="Hotel Name" readonly />
          <q-select
            v-model="rooms"
            :options="options"
            outlined
            label="Room Types"
            readonly
          />
          <q-separator inset /> -->
          <q-input label="Name" v-model="name" outlined />
          <div class="row">
            <div class="col">
              <q-input
                class="q-pr-sm"
                label="Phone Number"
                type="number"
                outlined
              />
            </div>
            <div class="col">
              <q-input
                outlined
                v-model="quantity"
                type="number"
                label="Quantity"
              >
                <template v-slot:append>
                  <q-icon name="keyboard_arrow_up" @click="incrementQuantity" />
                  <q-icon
                    name="keyboard_arrow_down"
                    @click="decrementQuantity"
                  />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <q-input outlined v-model="date" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="date">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col">
              <q-input class="q-pl-sm" label="Check OUT" outlined />
            </div>
          </div>
          <q-input
            outlined
            label="Request and Suggestions"
            type="textarea"
          /> </q-form
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
  name: "BookFormComponent",
  setup() {
    return {
      // date: ref(""),
      date: ref("2019/02/01"),
      name: ref(""),
      rooms: ref(null),
      quantity: ref(""),
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
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    // closeDialog() {
    //   this.$emit("close");
    // },
  },
};
</script>

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
