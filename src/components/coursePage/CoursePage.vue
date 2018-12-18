<template>
  <main id="my-course">
    <course-header></course-header> 
    <!-- <Navbar /> -->
    <course></course>
  </main>
</template>

<script>
import CoursePageHeader from "./CoursePageHeader.vue";
import CoursePageMyCourse from "./CoursePageMyCourse.vue";
// import Navbar from './Navbar.vue'
import authService from "../../services/authService";

export default {
  components: {
    "course-header": CoursePageHeader,
    "course": CoursePageMyCourse,
    // "Navbar": Navbar,
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