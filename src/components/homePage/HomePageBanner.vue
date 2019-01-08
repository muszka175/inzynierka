<template>
  <section class="banner" id="banner">
    <v-carousel
      cycle
      dark
      height="300"
     >
    <v-carousel-item
      v-for="(picture, i) in pictures"
      :key="i"
      :src="picture.src"
    ></v-carousel-item>
  </v-carousel>
  </section>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null,
      pictures: [
        {src: "./../../assets/japan01.jpg"},
        {src: "./../../assets/japan00.jpg"},
        {src: "./../../assets/japan02.jpg"},
        {src: "/../../assets/japan03.jpg"},
        {src: "./../../assets/japan04.jpg"}
      ]
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>