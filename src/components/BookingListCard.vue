<template>
  <q-card
    style="width: auto; max-width: 500px; border-radius: 15px"
    class="q-pa-md shadow-5"
  >
    <q-card-section class="q-pa-none q-gutter-sm">
      <div class="text-h6">
        <q-input
          outlined
          readonly
          label="Name of the Person"
          v-model="booking_name"
        >
          <template v-slot:prepend> <q-icon name="person" /> </template
        ></q-input>
      </div>
      <div class="text-subtitle2">
        <q-input outlined readonly label="Contact Person" v-model="phone_num"
          ><template v-slot:prepend> <q-icon name="phone" /></template
        ></q-input>
      </div>
      <div class="text-subtitle2">
        <q-input outlined readonly label="No. of Guest" v-model="no_of_guest">
          <template v-slot:prepend> <q-icon name="hotel" /></template>
        </q-input>
      </div>
      <div class="text-subtitle1">
        <q-input outlined readonly label="Description" v-model="description">
          <template v-slot:prepend> <q-icon name="book" /></template>
        </q-input>
      </div>
    </q-card-section>
    <q-card-section class="q-px-none">
      <div class="row justify-evenly">
        <div class="col-6 q-pr-sm">
          <q-input
            readonly
            outlined
            label="Check in Date"
            v-model="schedule.check_in"
          />
        </div>
        <div class="col-6 q-pl-sm">
          <q-input
            readonly
            outlined
            label="Check out Date"
            v-model="schedule.check_out"
          />
        </div>
      </div>
      <q-separator />
      <q-card-actions class="q-pb-none q-pl-none">
        <q-space />
        <q-btn @click="cancel(uid)" label="Cancel" color="negative" />
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
import { ref, reactive } from "vue";
export default {
  name: "BookingListCardComponent",
  props: ["bookingRecords"],
  setup(props) {
    const uid = ref(props.bookingRecords.uid);
    const booking_name = ref(props.bookingRecords.booking_name);
    const phone_num = ref(props.bookingRecords.phone_num);
    const no_of_guest = ref(props.bookingRecords.no_of_guest);
    const description = ref(props.bookingRecords.description);
    const rooms = ref(props.bookingRecords.rooms);
    const schedule = reactive(...props.bookingRecords.schedule);
    return {
      booking_name,
      phone_num,
      no_of_guest,
      description,
      rooms,
      schedule,
      uid,
    };
  },
  computed: {},
  methods: {
    ...mapActions("addBooking", ["cancelBooking"]),
    async cancel(uid) {
      await this.cancelBooking(uid);
      console.log(uid);
    },
  },
};
</script>

<style></style>
