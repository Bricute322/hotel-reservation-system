<template>
  <q-page class="flex flex-center">
    <q-card style="width: 400px; border-radius: 15px" class="q-pa-md">
      <q-card-section>
        <div class="row">
          <div class="text-h4 q-py-none">Sign up</div>
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
      <q-form ref="registerForm" @submit.prevent="signUp">
        <q-card-section class="q-gutter-md">
          <q-input
            v-model="registerInformation.username"
            dense
            outlined
            label="Username"
          >
            <template v-slot:prepend
              ><q-icon color="primary" name="person" /></template
          ></q-input>
          <q-input
            v-model="registerInformation.email"
            dense
            outlined
            label="Email"
          >
            <template v-slot:prepend
              ><q-icon color="primary" name="email" /></template
          ></q-input>
          <q-input
            v-model="registerInformation.password"
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
            v-model="registerInformation.password2"
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
            /></template> </q-input
        ></q-card-section>
        <q-card-actions>
          <q-btn
            style="border-radius: 10px"
            color="primary"
            class="full-width"
            text-color="white"
            label="Register"
            type="submit"
          />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RegisterPage",
  data() {
    return {
      registerInformation: {
        username: null,
        email: null,
        password: null,
        password2: null,
      },
      password: "",
      confirm_password: "",
      isPwd: true,
    };
  },
  computed: {},
  methods: {
    ...mapActions("auth", ["registerAction"]),
    async signUp() {
      if (this.$refs.registerForm.validate()) {
        await this.registerAction(this.registerInformation);
      }
    },
  },
};
</script>

<style scoped></style>
