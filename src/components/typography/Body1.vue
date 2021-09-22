<template>
  <v-card-title id="body-card" class="font-weight-light pa-0 mb-1 ">{{
    text
  }}</v-card-title>
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

<style scoped>
#body-card.body-card {
  font-size: 14px;
}
</style>
