<template>
<div class="row">
  <div class="col-md-4 team-member" v-for="creator in this.creators" :key="creator.name">
    <div class="team-member-image">
      <img alt="zdjęcie twóców" :src="creator.image">
      <div class="title-wrap">
        <h6>{{ creator.name }}</h6>
      </div>
      <a class="team-member-excerpt" href="#">
        <div class="team-member-excerpt-wrap">
          <div class="team-member-span">
            <h6>{{ creator.name }}</h6>
            <div class="team-designation">{{ creator.description }}</div>
          </div>
        </div>
      </a>
    </div>
    <social-media></social-media>
  </div>
  </div>
</template>

<script>
import creatorsSocialMedia from "./CreatorsSocialMedia.vue";

export default {
  components: {
    "social-media": creatorsSocialMedia
  },
  data() {
    return {
      creators: [
        {
          name: "Daria Karwat",
          image: "assets/daria.jpg",
          description: "Android Developer"
        },
        {
          name: "Karolina Mucha",
          image: "../assets/karolina.jpg",
          description: "Frontend Developer"
        },
        {
          name: "Piotr Halama",
          image: "./../assets/piotrek.jpg",
          description: "Backend Developer"
        }
      ]
    };
  }
};
</script>
