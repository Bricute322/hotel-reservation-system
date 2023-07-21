<template>
  <q-page class="bg-deep-purple-1">
    <!-- FirstPage -->

    <div class="row">
      <div class="col">
        <q-parallax
          src="../assets/BG.jpg"
          style="margin-left: auto; margin-right: auto; display: block"
        >
          <div class="flex flex-center">
            <WelcomeComponent
              class="q-ma-sm q-pa-md q-gutter-sm"
              :class="{
                'text-h6': $q.screen.width > 600,
                'text-subtitle1': $q.screen.width <= 600,
              }"
            />
          </div>
        </q-parallax>
      </div>
    </div>
    <div class="q-py-md">
      <SearchComponent />
    </div>
    <!-- Second Page -->
    <div class="row">
      <div class="col-6 text-h5 text-bold q-px-md q-pt-md">Popular Hotels</div>
      <div class="flex justify-end col-6 q-px-md q-pt-md">See all</div>
    </div>
    <!-- Card for Advertisements Hotels -->
    <div class="row">
      <div class="col-12 col-md q-px-md q-pt-md">
        <q-card class="q-pa-md availability-card">
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-card-section>
            <div class="text-overline text-light-blue-6">
              <q-icon size="20px" name="location_on" />Bertese, Quezon, Nueva
              Ecija
            </div>
            <div class="text-h5 q-mt-sm q-mb-xs text-bold">Title</div>
            <div class="text-subtitle1 text-bold">
              Available Rooms:
              <q-chip color="teal" text-color="white" icon="check">10</q-chip>
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn flat color="primary" label="Share" disable />
            <q-btn flat color="secondary" label="Book" />
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section class="text-subitle2">
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
      <!-- Static CArd -->
      <div class="col-12 col-md q-px-md q-pt-md">
        <q-card class="q-pa-md availability-card">
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-card-section>
            <div class="text-overline text-light-blue-6">
              <q-icon size="20px" name="edit_location" />Bertese, Quezon, Nueva
              Ecija
            </div>
            <div class="text-h5 q-mt-sm q-mb-xs text-bold">Title</div>
            <div class="text-subtitle1 text-bold">
              Available Rooms:
              <q-chip color="teal" text-color="white" icon="check">10</q-chip>
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn flat color="primary" label="Share" disable />
            <q-btn flat color="secondary" label="Book" />
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section class="text-subitle2">
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
      <div class="col-12 col-md q-px-md q-pt-md">
        <q-card class="q-pa-md availability-card">
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-card-section>
            <div class="text-overline text-light-blue-6">
              <q-icon size="20px" name="location_on" />Bertese, Quezon, Nueva
              Ecija
            </div>
            <div class="text-h5 q-mt-sm q-mb-xs text-bold">Title</div>
            <div class="text-subtitle1 text-bold">
              Available Rooms:
              <q-chip color="teal" text-color="white" icon="check">10</q-chip>
            </div>
          </q-card-section>
          <q-card-actions>
            <q-btn flat color="primary" label="Share" disable />
            <q-btn flat color="secondary" label="Book" />
            <q-space />
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section class="text-subitle2">
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </div>
    <!-- Third Page -->
    <div class="row">
      <div class="col-12 text-h5 text-bold q-px-md q-pt-md">
        Trending Destination
      </div>
      <div class="text-subtitle1 q-px-md">
        Discover Some Good Places from the Philippines!
      </div>
      <div class="col-12 col-md q-px-md q-pt-md">
        <DiscoverComponent />
      </div>
    </div>
  </q-page>
</template>

<script>
import WelcomeComponent from "../components/Welcome.vue";
import SearchComponent from "../components/Search.vue";
import DiscoverComponent from "../components/Discover.vue";
import { ref } from "vue";
export default {
  name: "FirstPage",
  components: { DiscoverComponent, SearchComponent, WelcomeComponent },
  setup() {
    return {
      showBookingDialog: ref(false),
      expanded: ref(false),
    };
  },
};
</script>
<!-- <style scoped></style> -->
<style lang="sass" scoped>
.availability-card
  width: 100%
  max-width: 350px
</style>
