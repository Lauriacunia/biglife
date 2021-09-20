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

    <TitleActivityCard v-bind:character="character" />

    <v-card-text>
      <LocationActivityCard v-bind:character="character" />

      <DescriptionActivityCard v-bind:character="character" />

      <PointsActivityCard v-bind:character="character" />
    </v-card-text>
  </v-card>
</template>

<script>
import TitleActivityCard from "../components/TitleActivityCard.vue";
import LocationActivityCard from "../components/LocationActivityCard.vue";
import DescriptionActivityCard from "../components/DescriptionActivityCard.vue";
import PointsActivityCard from "../components/PointsActivityCard.vue";

export default {
  name: "ActivityCard",
  props: ["character"],
  components: {
    TitleActivityCard,
    LocationActivityCard,
    DescriptionActivityCard,
    PointsActivityCard,
  },
};
</script>
