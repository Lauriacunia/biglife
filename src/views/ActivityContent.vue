<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <ActivityContentCard
          v-bind:activity="activity"
          v-bind:activity_data_json="activity_data_json"
        />
        <ActivityContentBenefits v-bind:activity="activity" />
        <ActivityContentRules v-bind:activity="activity" />
        <ActivityContentOthers v-bind:activity="activity" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
import ActivityContentCard from "../containers/ActivityContentCard.vue";
import ActivityContentBenefits from "../containers/ActivityContentBenefits.vue";
import ActivityContentRules from "../containers/ActivityContentRules.vue";
import ActivityContentOthers from "../containers/ActivityContentOthers.vue";

export default {
  name: "ActivityContent",
  components: {
    ActivityContentCard,
    ActivityContentBenefits,
    ActivityContentRules,
    ActivityContentOthers,
  },

  data() {
    return {
      activity_id: "",
      activity: {},
      activity_data_json: {},
    };
  },

  created() {
    console.log("ActivityContent created");
    this.activity_id = this.$route.params.id;
    this.fetch();
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
      });
    },
  },
};
</script>
