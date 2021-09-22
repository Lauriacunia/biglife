<template>
  <v-card-text class="font-weight-light pa-0 mb-1" style="font-size:14px; "
    >{{ text }}
  </v-card-text>
</template>

<script>
export default {
  name: "Body1",
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
