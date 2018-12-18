<template>
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1">
            The Net Ninja
          </p>
        </v-flex>
        <!-- <v-flex class="mt-4 mb-3">
        </v-flex> -->
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
</template>

<script>

  export default {
    data(){
      return {
        drawer: false,
        links: [
          { icon: 'dashboard', text: 'Dashboard', route: '/' },
         { icon: 'folder', text: 'My Projects', route: '/projects' },
         { icon: 'person', text: 'Team', route: '/team' },
       ],
      }
    }
  }
</script>