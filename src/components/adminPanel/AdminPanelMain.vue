<template>
  <div class="main" v-if="authorized">
    <main-menu class="navbar-toggleable-md"></main-menu>
    <sidebar></sidebar>
    <div class="panel">
      <v-content id="admin-panel">
        <router-view></router-view>
      </v-content>
    </div>
  </div>
</template>

<script>
import Menu from "../coursePage/CoursePageHeader.vue";
import SidebarLeft from "../coursePage/SidebarLeft.vue";
import authService from "../../services/authService";

export default {
  components: {
    "main-menu": Menu,
    sidebar: SidebarLeft
  },
  data() {
    return {
      authorized: false
    };
  },
  beforeCreate() {
    if (!authService.isAdmin()) this.$router.push("/course");
    this.$http.get("get-details").then(
      response => {
        console.log(response.body.success.role);
        if (response.body.success.role !== "admin") {
          this.$router.push("/course");
        } else {
          this.authorized = true;
        }
      },
      error => {
        this.$router.push("/course");
      }
    );
  }
};
</script>
