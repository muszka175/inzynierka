<template>
  <v-navigation-drawer v-model="drawer" app disable-resize-watcher class="primary">
    <v-layout column align-center>
      <v-flex class="mt-5">
        <v-btn class="buttonAvatar" :to="links[2].route">
          <v-avatar size="100">
            <img src="/assets/avatar.jpg" alt>
          </v-avatar>
        </v-btn>
        <p class="white--text subheading mt-1 name">{{this.personDetails.name}}</p>
      </v-flex>
    </v-layout>
    <v-list class="sidebar-list">
      <v-list-tile v-for="link in links" @click="closeSidebar" :key="link.text" router :to="link.route">
        <v-list-tile-action>
          <v-icon color="#FAAC22">{{ link.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        console.log('sidebar', this.$store.state.sidebar);
        return this.$store.state.sidebar;
      },
      set(val) {
        this.$store.commit("sidebar", val);
      }
    }
  },
  methods: {
    closeSidebar() {
      this.$store.commit('sidebar', false);
    }
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
  beforeCreate() {
    this.$http
      .get("get-details", null, {
        headers: {
          Accept: "application/json"
        }
      })
      .then(response => {
        console.log(response.body.success);
        this.personDetails = response.body.success;
      });
  }
};
</script>
