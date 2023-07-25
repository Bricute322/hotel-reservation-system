<template>
  <q-page class="flex flex-center">
    <q-card style="width: 500px; border-radius: 15px" class="q-pa-md">
      <q-card-section class="q-pb-none">
        <div class="row">
          <div class="text-h4">Book Now !</div>
          <q-space />
          <q-btn
            flat
            round
            icon="chevron_left"
            size="md"
            @click="$router.back()"
          >
            <q-tooltip transition-show="rotate" transition-hide="rotate"
              >Go back to room list</q-tooltip
            ></q-btn
          >
        </div>
      </q-card-section>
      <q-card-section>
        <q-form ref="bookForm" class="q-gutter-md" @submit.prevent="submit">
          <q-input
            label="Name"
            v-model="bookGuestInformation.booking_name"
            outlined
            :rules="[required]"
          />
          <div class="row">
            <div class="col">
              <q-input
                v-model="bookGuestInformation.phone_num"
                class="q-pr-sm"
                label="Phone Number"
                type="number"
                outlined
                :rules="[required]"
              />
            </div>
            <div class="col">
              <q-input
                outlined
                v-model="bookGuestInformation.no_of_guest"
                type="number"
                label="Quantity"
                :rules="[required]"
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
              <q-input
                outlined
                v-model="bookGuestInformation.check_in"
                label="Check IN"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date today-btn v-model="bookGuestInformation.check_in">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="ok"
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
              <q-input
                v-model="bookGuestInformation.check_out"
                class="q-pl-sm"
                label="Check OUT"
                outlined
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="bookGuestInformation.check_out">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="ok"
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
          </div>
          <q-input
            v-model="bookGuestInformation.description"
            outlined
            label="Request and Suggestions"
            type="textarea"
          />

          <q-card-actions>
            <q-btn
              style="border-radius: 10px"
              color="primary"
              type="submit"
              label="Submit"
              class="full-width"
            />
          </q-card-actions> </q-form
      ></q-card-section> </q-card
  ></q-page>
</template>

<script>
import { onMounted, reactive, ref, getCurrentInstance } from "vue";
import { mapActions } from "vuex";
import { api } from "../boot/axios";

export default {
  name: "BookFormComponent",
  setup() {
    const test = ref(null);
    const maxLength = 15;
    const route = getCurrentInstance().proxy.$route;
    const bookForm = ref(null);
    const required = ref((value) => !!value || "This field is required");
    const data = ref(null);
    const bookGuestInformation = reactive({
      booking_name: null,
      phone_num: null,
      no_of_guest: null,
      check_in: "",
      check_out: null,
      description: null,
    });
    onMounted(async () => {
      try {
        const response = await api.get(
          `/client/rooms/details/?uid=${route.params.uid}`
        );
        bookGuestInformation.value = response.data.data.uid;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });
    return {
      test,
      maxLength,
      data,
      bookGuestInformation,
      required,
      bookForm,
      checkInDate: ref(""),
      name: ref(""),
      rooms: ref(null),
    };
  },
  computed: {},
  methods: {
    ...mapActions("addBooking", ["addBooking"]),
    incrementQuantity() {
      if (this.bookGuestInformation.no_of_guest < this.maxLength) {
        this.bookGuestInformation.no_of_guest++;
      }
    },
    decrementQuantity() {
      if (this.bookGuestInformation.no_of_guest > 1) {
        this.bookGuestInformation.no_of_guest--;
      }
    },
    async submit() {
      if (this.$refs.bookForm.validate()) {
        await this.addBooking(this.bookGuestInformation);
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
