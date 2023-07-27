<template>
  <div class="q-mb-xl" style="text-align: center">
    <q-card
      style="
        width: 100%;
        max-width: 1200px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 20px;
      "
    >
      <h1 class="text-white text-h1 text-bold">
        Welcome to <strong>Hotello</strong>
      </h1>
      <h2 class="text-white">Your Ultimate Hotel Booking Companion</h2>
      <div class="text-subtitle1 text-white">
        {{ lorem }}
      </div>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "WelcomeComponent",
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et dictum metus. Aenean placerat volutpat pellentesque. Morbi et luctus nulla. Ut hendrerit orci massa, bibendum commodo dui consectetur ut. Vivamus eget nunc rhoncus, ultricies magna nec, ornare ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec iaculis quam, a auctor risus. Maecenas elementum sem nunc, non lobortis tortor mollis ut. Proin sagittis elit nec nunc rutrum, et fermentum magna interdum. Curabitur egestas odio ut turpis cursus, non maximus nulla maximus. Fusce posuere consequat vehicula.",
    };
  },
};
</script>

<style></style>
