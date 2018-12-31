<template>
  <div class="sidebar-left col-md-12">
      <main-games></main-games>
  </div>
</template>

<script>
import MainGames from './MainGames.vue';



export default {
  components:{
    'main-games' : MainGames,
  },
  data () {
    return {

    }
  }
}
</script>