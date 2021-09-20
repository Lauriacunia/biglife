<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="369"
    flat
    @click="handleClick"
  >
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
      v-bind:src="activity_data_json.image[0]"
      v-bind:alt="activity.title"
    ></v-img>

    <TitleActivityCard v-bind:activity="activity" />

    <v-card-text>
      <LocationActivityCard v-bind:activity="activity_data_json" />

      <DescriptionActivityCard v-bind:activity="activity_data_json" />

      <PointsActivityCard v-bind:activity="activity" />
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
  props: ["activity"],
  components: {
    TitleActivityCard,
    LocationActivityCard,
    DescriptionActivityCard,
    PointsActivityCard,
  },
  data() {
    return {
      activity_data_json: {},
    };
  },

  created() {
    this.activity_data_json = JSON.parse(this.activity.activity);
    console.log(this.activity_data_json);
  },

  methods: {
    handleClick() {
      this.$emit("handleClick", this.activity);
    },
  },
};
</script>
