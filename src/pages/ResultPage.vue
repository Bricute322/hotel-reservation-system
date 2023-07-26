<template>
  <q-page class="flex flex-center">
    <Search />
    <div v-for="items in searching" :key="items.uid">
      <ResultCardComponents :searchResultinformation="items" />
    </div>
  </q-page>
</template>

<script>
import Search from "src/components/Search.vue";
import { mapState } from "vuex";
import ResultCardComponents from "../components/ResultCard.vue";
export default {
  name: "ResultPage",
  components: { ResultCardComponents, Search },
  setup() {
    return {};
  },
  computed: {
    ...mapState("search", {
      searching: "searching",
    }),
  },
  methods: {
    result() {
      this.$router.push({ path: "/details" });
    },
  },
};
</script>

<style lang="sass" scoped>
.btn-fixed-width
  width: 250px
</style>
