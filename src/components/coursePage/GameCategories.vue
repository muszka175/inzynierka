<template>
    <main class="category">
        <course-header></course-header> 
        <div class="container">
            <div class="category-list" v-if="!loading">
                <div class="row">
                    <div class="container-cube col-md-4" v-for="category in this.categories" :key="category.id">
                        <v-progress-linear v-if="progress[gameId] && progress[gameId][category.id]" v-model="progress[gameId][category.id]"></v-progress-linear>
                        <v-progress-linear v-if="!progress[gameId] || progress[gameId][category.id]" v-model="zero"></v-progress-linear>
                        
                        <div class="cube">
                            <router-link v-bind:to="'/game/' + gameId + '/category/' + category.id" exact>{{category.name}}</router-link>
                            </div>
                    </div>
                 
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import CoursePageHeader from "./CoursePageHeader.vue";
import authService from "../../services/authService";

export default {
  components: {
    "course-header": CoursePageHeader
  },
  data() {
    return {
      categories: [],
      link: "",
      gameId: this.$route.params.gameId,
      progres: [],
      zero: 0,
      loading: true,
    };
  },
  methods: {
    generateArray() {}
  },
  beforeCreate() {
    this.$http.get("courses").then(response => {
      this.categories = response.body;

      this.$http
        .get("progress", {
          headers: {
            Authorization: `Bearer ${authService.getToken()}`
          }
        })
        .then(response => {
          this.progress = {};

          response.body.forEach(row => {
            if (!this.progress.hasOwnProperty(row.game)) {
              this.progress[row.game] = {};
            }

            if (parseInt(row.score) === 0 || parseInt(row.max_points) === 0) {
              console.log("dupa");
              this.progress[row.game][row.category] = 0;
            } else {
              this.progress[row.game][row.category] = Math.round(
                row.score / row.max_points * 100
              );
            }
          });

            console.log(this.progress);

          this.loading = false;
        });
    });
  }
};
</script>