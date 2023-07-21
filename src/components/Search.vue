<template>
  <div class="flex flex-center">
    <q-card class="shadow-10" style="width: 900px">
      <q-card-section horizontal>
        <div class="row">
          <!-- Location Text Input -->
          <div>
            <q-card-section>
              <q-input dense outlined label="Location" />
            </q-card-section>
          </div>
          <q-separator vertical inset />
          <div>
            <q-card-section>
              <q-input
                outlined
                dense
                :model-value="`${dateRange.from} - ${dateRange.to}`"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="dateRange" range>
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
            </q-card-section>
          </div>
          <q-separator vertical inset />
          <div>
            <q-card-section>
              <q-input
                dense
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
            </q-card-section>
          </div>
          <q-card-actions class="q-pa-none">
            <q-btn flat icon="search"
              ><div class="text-subtitle1">search</div></q-btn
            ></q-card-actions
          >
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SearchComponent",
  name: "FirstPage",
  setup() {
    const dateRange = ref({ from: "2022/01/01", to: "2022/01/05" });
    return {
      dateRange,
    };
  },
  data() {
    return {
      quantity: ref(""),
    };
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
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
