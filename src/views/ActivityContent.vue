<template>
  <div>
    <ActivityContentCard v-bind:activity="activity" />
  </div>
</template>

<script>
import ActivityContentCard from "../containers/ActivityContentCard.vue";

export default {
  name: "ActivityContent",
  props: ["activity"],
  components: {
    ActivityContentCard,
  },

  data() {
    return {
      activity_data_json: {},
    };
  },
};
</script>
