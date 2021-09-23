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
          <Carousel
            v-bind:images="activity_data_json.image"
            style="max-width: 563px; height: 371px;"
          />
        </v-col>
        <v-col>
          <div class="d-flex flex-no-wrap pa-0">
            <v-card-text class="pa-0">
              <Title1
                v-bind:text="activity.title"
                :font_size="2"
                class="mb-3 pa-0"
              />
              <Body1
                v-bind:activity="activity_data_json"
                style="line-height: normal; width: 466px;"
                :font_size="2"
                class="mb-3 pa-0"
              />
              <ParticipantsActivityCard
                v-bind:activity="activity_data_json"
                class="pa-0 mb-3"
              />
              <LocationActivityCard
                v-bind:activity="activity_data_json"
                class="mb-6"
                :iconSize="2"
              />
              <PointsActivityCard v-bind:activity="activity" />
            </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Title1 from "../components/typography/Title1.vue";
import LocationActivityCard from "../components/LocationActivityCard.vue";
import Body1 from "../components/typography/Body1.vue";
import ParticipantsActivityCard from "../components/ParticipantsActivityCard.vue";
import PointsActivityCard from "../components/PointsActivityCard.vue";
import Carousel from "../components/Carousel.vue";

export default {
  name: "ActivityContentCard",
  props: ["activity", "activity_data_json"],
  components: {
    Title1,
    LocationActivityCard,
    Body1,
    ParticipantsActivityCard,
    PointsActivityCard,
    Carousel,
  },
};
</script>
