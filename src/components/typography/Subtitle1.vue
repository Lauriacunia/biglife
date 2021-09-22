<template>
  <v-card-title class="font-weight-regular pa-0 mb-1" style="font-size:14px;"
    >{{ text }}
  </v-card-title>
</template>

<script>
export default {
  name: "SubTitle1",
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
