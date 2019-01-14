<template>
  <v-app>
    <router-view></router-view>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import CoursePage from './components/coursePage/CoursePage.vue';
import Footer from './components/shared/Footer.vue';

export default {
  components: {
    'course-page': CoursePage,
    'app-footer' : Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
   @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
   @import '../scss/main.scss';
  
</style>
