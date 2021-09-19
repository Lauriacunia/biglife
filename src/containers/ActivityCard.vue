<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="369" flat>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      width="369"
      height="240"
      v-bind:src="character.image"
      v-bind:alt="character.name"
    ></v-img>

    <v-card-title class="font-weight-bold">{{ character.name }}</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1 font-weight-regular">
        Italian, Cafe
      </div>

      <div>
        Small plates, salads & sandwiches - an intimate setting with 12 indoor
        seats plus patio seating.
      </div>
    </v-card-text>

    <v-card-title class="font-weight-medium">{{ character.name }}</v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "ActivityCard",
  props: ["character"],
};
</script>
