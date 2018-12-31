<template>
  <main id="my-course">
    <course-header></course-header> 
    <!-- <Navbar /> -->
    <course></course>
  </main>
</template>

<script>
import CoursePageHeader from "./CoursePageHeader.vue";
import MyCourse from "./MyCourse.vue";
// import Navbar from './Navbar.vue'
import authService from "../../services/authService";

export default {
  components: {
    "course-header": CoursePageHeader,
    "course": MyCourse,
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