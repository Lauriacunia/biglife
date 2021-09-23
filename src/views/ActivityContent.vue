<template>
  <v-app
    v-if="
      Object.entries(activity_data_json).length != 0 &&
        Object.entries(activity).length != 0 &&
        benefits.length != 0
    "
  >
    <v-main>
      <v-container style="margin-top:100px; border:1px solid black;">
        <ActivityContentCard
          v-bind:activity="activity"
          v-bind:activity_data_json="activity_data_json"
          class="pa-0"
          style="margin-bottom: 85px;"
        />

        <v-card-title class="pa-1 mb-0" style="font-size:22px; font-weight:500"
          >¿Qué incluye?</v-card-title
        >
        <LineDecorator class="pa-0 mb-6" />
        <div class="pa-2">
          <v-card-text
            class="pa-0 mb-13"
            style="font-size:18px; font-weight:300; width:564px;"
            v-html="benefits"
          ></v-card-text>
        </div>
        <ActivityContentRules
          class="pa-0 mb-13"
          v-bind:activity="activity_data_json"
        />
        <ActivityContentOthers class="pa-0 mb-1" v-bind:activity="activity" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import ActivityContentCard from "../containers/ActivityContentCard.vue";
import ActivityContentRules from "../containers/ActivityContentRules.vue";
import ActivityContentOthers from "../containers/ActivityContentOthers.vue";
import LineDecorator from "../components/decorators/LineDecorator.vue";

export default {
  name: "ActivityContent",
  components: {
    ActivityContentCard,
    ActivityContentRules,
    ActivityContentOthers,
    LineDecorator,
  },

  data() {
    return {
      activities: [],
      activity_id: "",
      activity: {},
      activity_data_json: {},
      benefits: "",
    };
  },

  created() {
    console.log("ActivityContent created");
    this.activity_id = this.$route.params.id;
    this.fetch();
  },

  watch: {
    $route() {
      this.activity_id = this.$route.params.id;
      this.fetch();
    },
  },
  methods: {
    fetch() {
      const BASE_URL = "https://json-biglifeapp.herokuapp.com";
      const path = `/activity/${this.activity_id}`;
      const url = `${BASE_URL}${path}`;

      console.log("fetch en ActivityContent");
      let result = axios.get(url);
      result.then((response) => {
        console.log(response.data);
        this.activity = response.data;
        this.activity_data_json = this.convertToJson(this.activity.activity);
        console.log(this.activity_data_json);
        this.benefits = this.handleStrFormat(
          this.convertToString(this.activity_data_json.benefits)
        );
      });
    },
    convertToString(obj) {
      return JSON.stringify(obj);
    },
    convertToJson(str) {
      return JSON.parse(str);
    },
    handleStrFormat(str) {
      return str.replace(/\\n/g, "").replace(/"/g, "");
    },
  },
};
</script>

<style scoped></style>
