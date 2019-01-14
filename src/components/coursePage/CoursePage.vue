<template>
  <div class="main">
    <course-header></course-header>
    <sidebar></sidebar>
    <v-content class="main-container">
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import CoursePageHeader from "./CoursePageHeader.vue";
import MainGames from "./MainGames.vue";
import Stepper from "./Stepper.vue";
import SidebarLeft from "./SidebarLeft.vue";
import authService from "../../services/authService";

export default {
  components: {
    "course-header": CoursePageHeader,
    sidebar: SidebarLeft
  },
  data() {
    return {};
  },
  beforeCreate() {
    if (!authService.isSignedIn()) this.$router.push("/login");
  }
};
</script>

