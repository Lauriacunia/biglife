<template>
  <div>
    <ActivityContentCard v-bind:activity="activity" />
    <ActivityContentBenefits v-bind:activity="activity" />
    <ActivityContentRules v-bind:activity="activity" />
    <ActivityContentOthers v-bind:activity="activity" />
  </div>
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
      activity_data_json: {},
      activity_id: "",
      activity: {},
    };
  },

  created() {
    this.activity_id = this.$route.params.id;
    this.fetch();
  },

  methods: {
    fetch() {
      const BASE_URL = "https://json-biglifeapp.herokuapp.com";
      const path = `/activity/${this.activity_id}`;
      const url = `${BASE_URL}${path}`;

      let result = axios.get(url);
      result.then((response) => {
        this.activity = response.data;
        console.log(response.data);
      });
      this.scrollToTop();
    },
  },
};
</script>
