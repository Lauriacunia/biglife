<template>
  <v-card-title class="font-weight-bold">{{ activity.points }}</v-card-title>
</template>

<script>
export default {
  name: "PointsActivityCard",
  props: ["activity"],
};
</script>
