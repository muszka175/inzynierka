<template>
  <main id="my-course">
    <course-header></course-header> 
    <v-content class="mx-4 mb-4">
      <course></course>
    </v-content>
  </main>
</template>

<script>
import CoursePageHeader from "./CoursePageHeader.vue";
import MainGames from './MainGames.vue';
import authService from "../../services/authService";

export default {
  components: {
    "course-header": CoursePageHeader,
    "course": MainGames,
  },
  data() {
    return {};
  },
  beforeCreate() {
    if(!authService.isSignedIn()) this.$router.push("/login");
  }
};
</script>

<style scoped>
#my-course{
  height: 100%;
}
</style>