<template>
  <div>
    <v-card-title v-if="!this.isOne" class="font-weight-bold pa-0"
      >Para {{ activity.participants }} personas</v-card-title
    >
    <v-card-title v-if="this.isOne" class="font-weight-bold pa-0"
      >Para {{ activity.participants }} persona</v-card-title
    >
  </div>
</template>

<script>
export default {
  name: "ParticipantsActivityCard",
  props: ["activity"],
  data() {
    return {
      isOne: false,
    };
  },
  created() {
    if (this.activity.participants === 1) {
      this.isOne = true;
    }
  },
};
</script>
