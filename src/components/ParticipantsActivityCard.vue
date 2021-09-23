<template>
  <v-card-title class="font-weight-bold pa-0">
    <OnePersonIcon v-if="isOne" />
    <TwoPersonsIcon v-if="!isOne" />
    <span style="font-size:16px; font-weight:normal;"
      >Para {{ activity.participants }} {{ text }}</span
    >
  </v-card-title>
</template>

<script>
import OnePersonIcon from "./icons/OnePersonIcon.vue";
import TwoPersonsIcon from "./icons/TwoPersonsIcon.vue";

export default {
  name: "ParticipantsActivityCard",
  props: ["activity"],
  components: {
    OnePersonIcon,
    TwoPersonsIcon,
  },
  data() {
    return {
      isOne: false,
      text: "personas",
    };
  },
  created() {
    this.setContent();
  },

  //intento resolver bug de cambio de persona x personas al cambiar de ruta
  watch: {
    $route() {
      this.text = "personas";
      this.setContent();
    },
  },
  methods: {
    setContent() {
      if (this.activity.participants === 1) {
        this.isOne = true;
        this.text = "persona";
      } else if (this.activity.participants > 1) {
        this.isOne = false;
        this.text = "personas";
      } else {
        this.text = "personas";
      }
    },
  },
};
</script>
