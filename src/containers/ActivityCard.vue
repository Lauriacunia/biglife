<template>
  <v-card
    v-if="
      Object.entries(activity_data_json).length != 0 &&
        Object.entries(activity).length != 0
    "
    class="ma-3 activity-card"
    v-bind:class="{
      max_whidth_md: max_whidth_md,
      max_whidth_sm: max_whidth_sm,
    }"
    flat
    @click="handleClick"
  >
    <div class="pa-0">
      <v-container
        class="pa-0"
        v-bind:class="{
          img_card_container: img_card_container,
          img_card_container_small: img_card_container_small,
          max_whidth_sm: max_whidth_sm,
          max_whidth_md: max_whidth_md,
        }"
      >
        <v-img
          v-bind:src="activity_data_json.image[0]"
          v-bind:alt="activity.title"
          class="mb-3 img-card"
        ></v-img>
      </v-container>

      <TitleActivityCard
        v-bind:activity="activity"
        v-bind:activityJson="activity_data_json"
        :cardSize="cardSize"
      />

      <v-card-text class="pa-0" align="space-around">
        <LocationActivityCard
          v-bind:activity="activity_data_json"
          :iconSize="1"
        />
        <Body1 v-bind:activity="activity_data_json" :font_size="1" />
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
import Body1 from "../components/typography/Body1.vue";
import PointsActivityCard from "../components/PointsActivityCard.vue";

export default {
  name: "ActivityCard",
  props: {
    activity: {
      type: Object,
    },
    cardSize: {
      type: Number,
    },
  },

  components: {
    TitleActivityCard,
    LocationActivityCard,
    Body1,
    PointsActivityCard,
  },
  data() {
    return {
      activity_data_json: {},
      img_card_container: false,
      img_card_container_small: false,
      max_whidth_sm: false,
      max_whidth_md: false,
    };
  },

  created() {
    this.activity_data_json = JSON.parse(this.activity.activity);
    this.setCardSize();
  },

  methods: {
    handleClick() {
      this.$emit("handleClick", this.activity);
    },
    setCardSize() {
      if (this.cardSize == 1) {
        this.img_card_container = true;
        this.max_whidth_md = true;
      } else if (this.cardSize == 2) {
        this.img_card_container_small = true;
        this.max_whidth_sm = true;
      } else {
        this.img_card_container = true;
        this.max_whidth_md = true;
      }
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
.img_card_container {
  width: 369px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img_card_container_small {
  width: 271px;
  height: 200px;
  justify-content: center;
  align-items: center;
}

.img-card {
  width: 100% !important;
  height: 100% !important;
  border-radius: 4px;
}
.max_whidth_md {
  width: 369px;
}
.max_whidth_sm {
  width: 271px;
}
</style>
