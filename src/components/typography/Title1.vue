<template>
  <v-card-title class="font-weight-bold pa-0 mb-1" style="font-size:18px;"
    >{{ text }}
  </v-card-title>
</template>

<script>
export default {
  name: "Title1",
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
