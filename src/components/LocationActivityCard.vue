<template>
  <v-container>
    <v-row class="pa-0 ">
      <Subtitle1 v-bind:text="location" />
    </v-row>
  </v-container>
</template>

<script>
import Subtitle1 from "./typography/Subtitle1.vue";

export default {
  name: "DescriptionActivityCard",
  props: ["activity"],
  components: {
    Subtitle1,
  },
  data() {
    return {
      location: "",
    };
  },
  created() {
    this.location = this.activity.locations[0].province;
  },
};
</script>
