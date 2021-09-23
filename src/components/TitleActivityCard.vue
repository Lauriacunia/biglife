<template>
  <v-container>
    <v-row class="pa-0">
      <Title1 v-bind:text="title" :font_size="1" />
    </v-row>
  </v-container>
</template>

<script>
import Title1 from "./typography/Title1.vue";

export default {
  name: "TitleActivityCard",
  props: ["title"],
  components: {
    Title1,
  },
};
</script>
