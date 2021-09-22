<template>
  <v-card
    v-if="
      Object.entries(activity_data_json).length != 0 &&
        Object.entries(activity).length != 0
    "
    class="pa-3 mb-5"
    max-width="369"
    flat
    @click="handleClick"
  >
    <v-img
      width="369"
      height="240"
      v-bind:src="activity_data_json.image[0]"
      v-bind:alt="activity.title"
      class="mb-1"
    ></v-img>

    <v-card-title class="pa-0">
      <TitleActivityCard v-bind:title="activity.title" />
    </v-card-title>

    <v-card-text class="pa-0" align="space-around">
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
