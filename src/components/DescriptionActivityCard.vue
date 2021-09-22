<template>
  <v-container>
    <v-row class="pa-0">
      <Body1 v-bind:text="description" style="line-height: normal;" />
    </v-row>
  </v-container>
</template>

<script>
import Body1 from "./typography/Subtitle1.vue";

export default {
  name: "DescriptionActivityCard",
  props: ["activity"],
  components: {
    Body1,
  },
  data() {
    return {
      description: "",
    };
  },
  created() {
    this.description = this.activity.description;
  },
};
</script>
