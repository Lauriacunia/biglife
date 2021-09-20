<template>
  <div>
    <ActivityContentCard v-bind:activity="activity" />
  </div>
</template>

<script>
import ActivityContentCard from "../containers/ActivityContentCard.vue";
import axios from "axios";

export default {
  name: "ActivityContent",
  components: {
    ActivityContentCard,
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
