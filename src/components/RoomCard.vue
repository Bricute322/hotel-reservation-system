<template>
  <q-card>
    <div class="row">
      <div class="col">
        <q-card-section horizontal class="q-px-md">
          <q-card-section class="col-2 flex flex-center">
            <q-img :src="room.room_image"
          /></q-card-section>
          <q-card-section>
            <div class="text-overline text-primary">Room Information</div>
            <div class="text-h5">{{ room.room_type }}</div>
            <div class="text-subtitle1">
              <q-icon name="night_shelter" size="sm" color="primary" />Room
              Number
              <strong>{{ room.room_no }}</strong>
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
              <q-icon name="person" />x{{ room.max_guest }}
            </div></q-card-section
          >
          <q-separator vertical inset />
          <q-card-section>
            <div class="text-subtittle2">{{ room.description }}</div>
          </q-card-section>
        </q-card-section>
      </div>
    </div>
    <q-card-section>
      <q-btn
        @click="showAddBookForm(room.uid)"
        color="primary"
        label="Book your Room"
        align="between"
        icon-right="hotel"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from "vue";
export default {
  name: "RoomDetailsComponent",
  props: {
    room: Object,
    default: () => {},
  },
  setup() {
    const availableRooms = ref("32");
    return {
      availableRooms,
    };
  },
  computed: {},
  methods: {
    showAddBookForm(uid) {
      console.log(uid);
      this.$router.push(`/book/${uid}`);
    },
  },
  mounted() {},
};
</script>

<style></style>
