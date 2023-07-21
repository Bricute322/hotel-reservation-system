<template>
  <q-page class="flex flex-center">
    <q-card style="width: 400px; border-radius: 15px" class="q-pa-md">
      <q-card-section
        ><div class="text-h4 q-py-none">Sign up</div></q-card-section
      >
      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input dense outlined label="Full Name">
            <template v-slot:prepend
              ><q-icon color="primary" name="person" /></template
          ></q-input>
          <q-input dense outlined label="Email">
            <template v-slot:prepend
              ><q-icon color="primary" name="email" /></template
          ></q-input>
          <q-input
            v-model="password"
            :type="isPwd ? 'password' : 'text'"
            dense
            outlined
            label="Password"
          >
            <template v-slot:prepend
              ><q-icon color="primary" name="lock"
            /></template>
            <template v-slot:append
              ><q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
            /></template>
          </q-input>
          <q-input
            v-model="confirm_password"
            :type="isPwd ? 'password' : 'text'"
            dense
            outlined
            label="Confirm Password"
          >
            <template v-slot:prepend
              ><q-icon color="primary" name="lock"
            /></template>
            <template v-slot:append
              ><q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
            /></template>
          </q-input> </q-form
      ></q-card-section>
      <q-card-actions>
        <q-btn
          style="border-radius: 10px"
          color="primary"
          class="full-width"
          text-color="white"
          label="Register"
        />
      </q-card-actions> </q-card
  ></q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "RegisterPage",
  setup() {
    return {
      password: ref(""),
      confirm_password: ref(""),
      isPwd: ref(true),
    };
  },
};
</script>

<style scoped></style>
