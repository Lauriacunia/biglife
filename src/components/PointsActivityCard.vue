<template>
  <v-card-title>{{ activity.points }} puntos</v-card-title>
</template>

<script>
export default {
  name: "PointsActivityCard",
  props: ["activity"],
};
</script>
