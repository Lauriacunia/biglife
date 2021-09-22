<template>
  <v-card
    v-if="
      Object.entries(activity_data_json).length != 0 &&
        Object.entries(activity).length != 0
    "
    class="pa-3 mb-5 activity-card"
    max-width="369"
    flat
    @click="handleClick"
  >
    <div>
      <v-container class="pa-0 img-card-container">
        <v-img
          width="369"
          height="240"
          v-bind:src="activity_data_json.image[0]"
          v-bind:alt="activity.title"
          class="mb-3 img-card"
        ></v-img>
      </v-container>

      <v-card-title class="pa-0">
        <TitleActivityCard v-bind:title="activity.title" />
      </v-card-title>

      <v-card-text class="pa-0" align="space-around">
        <LocationActivityCard v-bind:activity="activity_data_json" />
        <DescriptionActivityCard v-bind:activity="activity_data_json" />
      </v-card-text>
    </div>
    <v-card-text class="pa-0">
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

<style scoped>
.activity-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.img-card-container {
  width: 369px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-card {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
</style>
