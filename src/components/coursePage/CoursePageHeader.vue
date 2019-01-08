<template>
<nav class="mb-5 py-2">
    <v-toolbar flat app>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon></v-toolbar-side-icon>
      <logo></logo>
      <v-spacer></v-spacer>

      <v-btn flat color="grey" @click="signout">
        <span>Wyloguj</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-btn class="buttonAvatar" :to="links[2].route">
            <v-avatar size="100">
              <img src="/assets/karolina.jpg" alt="" />
            </v-avatar>
          </v-btn>
          <p class="white--text subheading mt-1 name">
            {{this.personDetails.name}}
          </p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Logo from '../shared/Logo.vue';
import authService from "../../services/authService";
// import CoursePageMenu from './CoursePageMenu.vue';
// import SidebarLeft from './SidebarLeft.vue';



export default {
  components:{
    'logo' : Logo,
  //   'main-menu' : CoursePageMenu,
  //   'sidebar': SidebarLeft
  },

 data(){
      return {
        drawer: false,
        personDetails: {},
        links: [
          { icon: 'dashboard', text: 'Zarządzaj', route: '/admin-panel' },
          { icon: 'folder', text: 'Strona kursu', route: '/course' },
          { icon: 'person', text: 'Ustawienia', route: '/settings' },
       ],
      }
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
    }
  },
  beforeCreate() {
  console.log(this);
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
}
</script>


<style lang="scss" scoped>
   @import '../../../scss/main.scss';
  .name{
    text-align: center;
  }
  .buttonAvatar{
    height: 100px;
    width: 100px;
    border-radius: 50px;
  }

</style>