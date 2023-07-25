<template>
  <div class="row">
    <div class="col q-pa-sm">
      <q-card style="width: 500px" class="q-pa-md" bordered>
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
            <q-input
              outlined
              readonly
              label="Contact Person"
              v-model="phone_num"
              ><template v-slot:prepend> <q-icon name="phone" /></template
            ></q-input>
          </div>
          <div class="text-subtitle2">
            <q-input
              outlined
              readonly
              label="No. of Guest"
              v-model="no_of_guest"
            >
              <template v-slot:prepend> <q-icon name="hotel" /></template>
            </q-input>
          </div>
          <div class="text-subtitle1">
            <q-input
              outlined
              readonly
              label="No. of Guest"
              v-model="description"
            >
              <template v-slot:prepend> <q-icon name="book" /></template>
            </q-input>
          </div>
        </q-card-section>
        <div v-for="booking in schedule" :key="booking.booking">
          <q-card-section class="q-px-none">
            <div class="row justify-evenly">
              <div class="col-6 q-pr-sm">
                <q-input
                  readonly
                  outlined
                  label="Check in Date"
                  v-model="booking.check_in"
                />
              </div>
              <div class="col-6 q-pl-sm">
                <q-input
                  readonly
                  outlined
                  label="Check out Date"
                  v-model="booking.check_in"
                />
              </div>
            </div>
            <q-separator />
            <q-card-actions class="q-pb-none q-pl-none">
              <q-space />
              <q-btn @click="cancelBooking" label="Cancel" color="negative" />
            </q-card-actions>
          </q-card-section>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ref } from "vue";
export default {
  name: "BookingListCardComponent",
  props: ["bookingRecords"],
  setup(props) {
    const booking_name = ref(props.bookingRecords.booking_name);
    const phone_num = ref(props.bookingRecords.phone_num);
    const no_of_guest = ref(props.bookingRecords.no_of_guest);
    const description = ref(props.bookingRecords.description);
    const rooms = ref(props.bookingRecords.rooms);
    const schedule = ref(props.bookingRecords.schedule);
    return {
      booking_name,
      phone_num,
      no_of_guest,
      description,
      rooms,
      schedule,
    };
  },
  computed: {},
  methods: {
    ...mapActions("cancelBooking", ["cancelBooking"]),
    async cancelBooking(rooms) {
      console.log(rooms);
      await this.cancelBooking(rooms);
    },
  },
};
</script>

<style></style>
