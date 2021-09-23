<template>
  <v-container>
    <v-card
      v-if="
        Object.entries(activity_data_json).length != 0 &&
          Object.entries(activity).length != 0
      "
      class="mx-auto my-12"
      flat
    >
      <v-row dense>
        <v-col>
          <v-img
            width="369"
            height="240"
            v-bind:src="activity_data_json.image[0]"
            v-bind:alt="activity.title"
          />
        </v-col>
        <v-col>
          <div class="d-flex flex-no-wrap ">
            <div>
              <v-card-text>
                <TitleActivityCard v-bind:activity="activity" />
                <DescriptionActivityCard v-bind:activity="activity_data_json" />
                <ParticipantsActivityCard
                  v-bind:activity="activity_data_json"
                />
                <LocationActivityCard v-bind:activity="activity_data_json" />
                <PointsActivityCard v-bind:activity="activity" />
              </v-card-text>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import TitleActivityCard from "../components/TitleActivityCard.vue";
import LocationActivityCard from "../components/LocationActivityCard.vue";
import DescriptionActivityCard from "../components/DescriptionActivityCard.vue";
import ParticipantsActivityCard from "../components/ParticipantsActivityCard.vue";
import PointsActivityCard from "../components/PointsActivityCard.vue";

export default {
  name: "ActivityContentCard",
  props: ["activity", "activity_data_json"],
  components: {
    TitleActivityCard,
    LocationActivityCard,
    DescriptionActivityCard,
    ParticipantsActivityCard,
    PointsActivityCard,
  },
};
</script>
