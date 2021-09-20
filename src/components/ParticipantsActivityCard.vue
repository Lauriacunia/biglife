<template>
  <v-card-title class="font-weight-bold"
    >Para {{ activity.participants }} personas</v-card-title
  >
</template>

<script>
export default {
  name: "ParticipantsActivityCard",
  props: ["activity"],
};
</script>
