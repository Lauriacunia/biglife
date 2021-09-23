<template>
  <v-card-title class="font-weight-bold pa-0">
    <v-img
      max-height="15"
      max-width="24"
      justify="center"
      aling="center"
      v-bind:src="icon"
      class="mr-3"
    ></v-img>
    <span style="font-size:16px; font-weight:normal;"
      >Para {{ activity.participants }} {{ text }}</span
    >
  </v-card-title>
</template>

<script>
export default {
  name: "ParticipantsActivityCard",
  props: ["activity"],
  data() {
    return {
      isOne: false,
      icon1:
        "https://user-images.githubusercontent.com/63796774/134558077-eff828e0-76df-477a-aace-485e48dfb359.png",
      icon2:
        "https://user-images.githubusercontent.com/63796774/134557846-44d17341-aeab-4f40-986e-099f02e23262.png",
      text: "personas",
      icon: "",
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
        this.icon = this.icon1;
        this.text = "persona";
      } else if (this.activity.participants > 1) {
        this.isOne = false;
        this.icon = this.icon2;
        this.text = "personas";
      } else {
        this.icon = this.icon2;
        this.text = "personas";
      }
    },
  },
};
</script>
