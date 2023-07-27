<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card bordered style="width: 975px" class="q-pa-md shadow-10">
      <q-card-section horizontal>
        <q-img class="col-4" src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-card-section>
          <div class="text-h3 q-mt-sm q-mb-xs">
            Room Number: {{ searchResultinformation.room_no }}
          </div>
          <div class="text-h5 text-light-blue-6">
            Room Type: {{ searchResultinformation.room_type }}
          </div>
          <div class="text-overline text-light-blue">
            <q-icon size="xs" color="light-blue" name="person" />
            {{ searchResultinformation.max_guest }}
            Max Guest
          </div>
        </q-card-section>
        <q-card-actions class="flex justify-end">
          <div class="col self-end">
            <q-btn
              @click="showAddBookForm(searchResultinformation.uid)"
              color="light-blue"
              class="btn-fixed-width"
              icon-right="chevron_right"
              label="Check Availability"
            />
          </div>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "ResultCardComponents",
  props: {
    searchResultinformation: { type: Object },
  },
  setup() {
    return {};
  },
  methods: {
    showAddBookForm(uid) {
      console.log(uid);
      this.$router.push(`/book/${uid}`);
    },
  },
};
</script>

<style></style>
