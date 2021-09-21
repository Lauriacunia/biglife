<template>
  <v-app>
    <v-main
      fluid
      v-if="
        Object.entries(activity_data_json).length != 0 &&
          Object.entries(activity).length != 0 &&
          benefits.length != 0
      "
    >
      <ActivityContentCard
        v-bind:activity="activity"
        v-bind:activity_data_json="activity_data_json"
      />

      <v-card-title>¿Qué incluye?</v-card-title>
      <div v-html="benefits"></div>

      <ActivityContentRules v-bind:activity="activity_data_json" />
      <ActivityContentOthers v-bind:activity="activity" />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import ActivityContentCard from "../containers/ActivityContentCard.vue";
import ActivityContentRules from "../containers/ActivityContentRules.vue";
import ActivityContentOthers from "../containers/ActivityContentOthers.vue";

export default {
  name: "ActivityContent",
  components: {
    ActivityContentCard,
    ActivityContentRules,
    ActivityContentOthers,
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
    this.fetchAll();
  },

  watch: {
    $route() {
      this.activity_id = this.$route.params.id;
      this.fetch();
      this.fetchAll();
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
        this.activity_data_json = JSON.parse(this.activity.activity);
        console.log(this.activity_data_json);
        this.benefits = JSON.stringify(this.activity_data_json.benefits)
          .replace(/\\n/g, "<br>")
          .replace(/"/g, "<br>");
        console.log(this.benefits);
      });
    },
  },
};
</script>
