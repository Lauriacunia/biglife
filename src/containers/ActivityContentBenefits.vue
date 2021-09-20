<template>
  <v-app v-if="Object.entries(activity).length != 0">
    <v-main>
      <v-card-title>¿Qué incluye?</v-card-title>
      <v-card-text>{{ activity.benefits }}</v-card-text>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "ActivityContentBenefits",
  props: ["activity"],
};
</script>
