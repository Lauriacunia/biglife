<template>
  <v-card-title class="font-weight-bold">{{ character.name }}</v-card-title>
</template>

<script>
export default {
  name: "PointsActivityCard",
  props: ["character"],
};
</script>
