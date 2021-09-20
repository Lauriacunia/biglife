<template>
  <v-card-title class="font-weight-bold">{{ activity.title }}</v-card-title>
</template>

<script>
export default {
  name: "TitleActivityCard",
  props: ["activity"],
};
</script>
