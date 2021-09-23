<template>
  <v-card-title class="font-weight-bold pa-0" style="heigth: 25px;">
    <span style="max-height:30px; max-width:30px;" class="mr-3">
      <LocationSmallIcon v-show="iconSizeSm" />
      <LocationMdIcon v-show="iconSizeMd" />
    </span>
    <span style="font-size:16px; font-weight:normal;">{{ location }}</span>
  </v-card-title>
</template>

<script>
import LocationSmallIcon from "./icons/LocationSmallIcon.vue";
import LocationMdIcon from "./icons/LocationMdIcon.vue";

export default {
  name: "DescriptionActivityCard",
  props: {
    activity: {
      type: Object,
    },
    iconSize: {
      type: Number,
    },
  },
  components: {
    LocationSmallIcon,
    LocationMdIcon,
  },
  data() {
    return {
      location: "",
      iconSizeSm: false,
      iconSizeMd: false,
    };
  },
  created() {
    this.location = this.activity.locations[0].province;
    this.setIcon();
  },
  methods: {
    setIcon() {
      if (this.iconSize == 1) {
        this.iconSizeSm = true;
        this.iconSizeMd = false;
      } else if (this.iconSize == 2) {
        this.iconSizeSm = false;
        this.iconSizeMd = true;
      } else {
        this.iconSizeSm = true;
        this.iconSizeMd = true;
      }
    },
  },
};
</script>
