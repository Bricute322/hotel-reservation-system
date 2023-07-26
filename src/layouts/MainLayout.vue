<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar flat>
        <q-toolbar-title class="text-h5">Welcome in Hotello!</q-toolbar-title>
        <div>
          <q-btn
            v-if="$store.state.auth.user"
            @click="home"
            flat
            label="Bookings"
            class="q-mr-sm"
          />

          <q-btn-dropdown
            v-if="$store.state.auth.user"
            color="white"
            flat
            dropdown-icon="change_history"
          >
            <div class="q-pa-md">
              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
                <div class="text-subtitle1 q-mt-md q-mb-xs">
                  {{ $store.state.auth.user.name }}
                </div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                />
              </div></div
          ></q-btn-dropdown>
          <q-btn
            v-if="!$store.state.auth.user"
            @click="register"
            outline
            label="Register"
            class="q-mr-sm"
          />
          <q-btn
            v-if="!$store.state.auth.user"
            @click="login"
            outline
            label="Login"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const router = useRouter();
    const leftDrawerOpen = ref(false);
    const home = () => {
      router.push({ path: "/booking-list" });
    };
    const register = () => {
      router.push({ path: "/register" });
    };
    const login = () => {
      router.push({ path: "/login" });
    };
    return {
      home,
      login,
      register,
      sizes: ["md"],
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style scoped>
.backgroundImage {
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
