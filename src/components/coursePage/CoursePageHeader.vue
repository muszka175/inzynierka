<template>
  <v-toolbar flat height="85px" app static>
    <v-toolbar-side-icon class="orange--text lighten-1" @click="toggleSidebar"></v-toolbar-side-icon>
    <logo></logo>
    <v-spacer></v-spacer>
    <v-btn flat color="#ff9800" @click="signout">
      <span class="orange--text lighten-1">Wyloguj</span>
      <v-icon class="orange--text lighten-1" right>exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import Logo from "../shared/Logo.vue";
import authService from "../../services/authService";

export default {
  components: {
    logo: Logo,
  },

  data() {
    return {
      personDetails: {},
      links: [
        { icon: "dashboard", text: "Zarządzaj", route: "/admin-panel" },
        { icon: "folder", text: "Strona kursu", route: "/course" },
        { icon: "person", text: "Ustawienia", route: "/settings" }
      ]
    };
  },
  methods: {
    signout() {
      const success = () => {
        this.$router.push("/home");
      };
      const error = () => {
        this.$router.push("/home");
      };
      authService.logout(success, error);
    },
    isAdmin() {
      return authService.isAdmin();
    },
    toggleSidebar() {
      this.$store.commit('toggleSidebar')
    }
  },
};
</script>


<style lang="scss" scoped>
@import "../../../scss/main.scss";
.sidebar-list {
  margin-left: 50px;
}
.v-list__tile__action {
  min-width: 45px;
}
</style>