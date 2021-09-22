<template>
  <v-container>
    <v-row class="pa-0">
      <Title1 v-bind:text="points" />
    </v-row>
  </v-container>
</template>

<script>
import Title1 from "./typography/Title1.vue";

export default {
  name: "DescriptionActivityCard",
  props: ["activity"],
  components: {
    Title1,
  },
  data() {
    return {
      points: "",
    };
  },
  created() {
    this.points = this.activity.points + " puntos ";
  },
};
</script>
