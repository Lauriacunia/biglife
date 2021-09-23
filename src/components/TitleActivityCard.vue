<template>
  <v-card-title class="pa-0 title">
    <span class="pa-0 mt-1 title ">
      <Title1 v-bind:text="activity.title" :font_size="1" />
    </span>
    <span class="pa-0 icon1" max-height="16" max-width="24">
      <OnePersonIcon class="mt-1" v-if="isOne == true" />
      <TwoPersonsIcon class="mt-1" v-if="isOne == false" />
    </span>
  </v-card-title>
</template>

<script>
import Title1 from "./typography/Title1.vue";
import OnePersonIcon from "./icons/OnePersonIcon.vue";
import TwoPersonsIcon from "./icons/TwoPersonsIcon.vue";

export default {
  name: "TitleActivityCard",
  props: {
    activity: {
      type: Object,
    },
    activityJson: {
      type: Object,
    },
    sizeCard: {
      type: Number,
      default: 1,
    },
  },
  components: {
    Title1,
    OnePersonIcon,
    TwoPersonsIcon,
  },
  data() {
    return {
      showIcon: false,
      isOne: false,
    };
  },
  created() {
    this.setContent();
    this.setCardSize();
  },
  methods: {
    setCardSize() {
      if (this.sizeCard == 1) {
        this.showIcon = false;
      } else if (this.sizeCard == 2) {
        this.showIcon = true;
      } else {
        this.showIcon = false;
      }
    },
    setContent() {
      if (this.activityJson.participants === 1) {
        this.isOne = true;
      } else if (this.activityJson.participants > 1) {
        this.isOne = false;
      } else {
        this.isOne = false;
      }
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
