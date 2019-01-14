<template>
  <main v-if="authorized">
    <main-menu class="navbar-toggleable-md"></main-menu>
    <sidebar></sidebar>
    <div class="panel">
      <v-container id="admin-panel">
        <v-layout>
          <v-flex class>
            <options></options>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </main>
</template>

<script>
import Options from "./AdminPanelOptions.vue";
import Menu from "../coursePage/CoursePageHeader.vue";
import SidebarLeft from "../coursePage/SidebarLeft.vue";
import authService from "../../services/authService";

export default {
  components: {
    options: Options,
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
