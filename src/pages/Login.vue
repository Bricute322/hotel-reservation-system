<template>
  <q-page class="flex flex-center">
    <q-card style="width: 350px; border-radius: 15px" class="q-pa-md">
      <q-card-section
        ><div class="text-h4 q-py-none">Sign up</div></q-card-section
      >
      <q-form ref="loginForm" @submit.prevent="signIn">
        <q-card-section class="q-gutter-md">
          <q-input v-model="loginInformation.email" outlined label="Email">
            <template v-slot:prepend
              ><q-icon color="primary" name="email" /></template
          ></q-input>
          <q-input
            v-model="loginInformation.password"
            :type="isPwd ? 'password' : 'text'"
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
            /></template> </q-input
        ></q-card-section>
        <q-card-actions>
          <q-btn
            style="border-radius: 10px"
            color="primary"
            class="full-width"
            text-color="white"
            label="Sign up"
            type="submit"
          />
        </q-card-actions> </q-form></q-card
  ></q-page>
</template>

<script>
import { mapActions } from "vuex";
import { ref } from "vue";
export default {
  name: "LoginPage",
  setup() {
    const loginInformation = ref({
      email: null,
      password: null,
    });
    return {
      loginInformation,
      password: ref(""),
      isPwd: ref(true),
    };
  },
  computed: {},
  methods: {
    ...mapActions("auth", ["loginAction"]),
    async signIn() {
      if (this.$refs.loginForm.validate()) {
        await this.loginAction(this.loginInformation);
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped></style>
