<template>
  <b-navbar-nav>
    <li>
      <a class="nav-button" href="/home#banner" v-smooth-scroll>STRONA GŁÓWNA</a>
    </li>
    <li>
      <a class="nav-button" href="/home#about-course" v-smooth-scroll>O KURSIE</a>
    </li>
    <li>
      <a class="nav-button" href="/home#offer" v-smooth-scroll>OFERTA</a>
    </li>
    <li>
      <a class="nav-button" href="/home#creators" v-smooth-scroll>TWÓRCY</a>
    </li>
    <li>
      <a class="nav-button" href="/home#contact" v-smooth-scroll>KONTAKT</a>
    </li>
    <li v-if="!isSignedIn" class="menuButton">
      <router-link to="/login" exact>ZALOGUJ</router-link>
    </li>
    <li v-if="!isSignedIn" class="menuButton">
      <router-link to="/register" exact>ZAREJESTRUJ</router-link>
    </li>
    <li v-if="isSignedIn" class="menuButton">
      <router-link to="/course" exact>Kurs</router-link>
    </li>
  </b-navbar-nav>
</template>

<script>
import authService from "../../services/authService";

export default {
  data() {
    return {
      isSignedIn: authService.isSignedIn()
    };
  },
  methods: {
    scrollMeTo(id) {
      const element = document.querySelector(`#${id}`);
      const top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
};
</script>
