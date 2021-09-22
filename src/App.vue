<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap");

html {
  scroll-behavior: smooth !important;
}
.v-application {
  font-family: "Quicksand", sans-serif !important;
}
.v-card__title {
  font-size: 18px !important;
}
.v-application .text-subtitle-1 {
  font-family: "Quicksand", sans-serif !important;
  font-size: 14px !important;
}
</style>
