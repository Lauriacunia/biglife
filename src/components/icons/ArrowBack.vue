<template>
  <v-btn icon flat @click="back">
    <v-img
      max-height="23"
      max-width="27"
      justify="center"
      aling="center"
      src="https://user-images.githubusercontent.com/63796774/134598597-400f643c-5200-4c86-9651-2d3cffa009ae.png"
      class="mr-3 mt-2 ico"
    ></v-img
  ></v-btn>
</template>

<script>
export default {
  name: "ArrowBack",
  methods: {
    back() {
      this.$router.go(-1);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.ico {
  width: 100%;
  height: 100%;
}
</style>
