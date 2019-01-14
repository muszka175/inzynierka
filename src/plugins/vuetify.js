import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md" || "fa4",
  theme: {
    primary: "#16a085",
    primaryHover: "#1ABC9C",
    secondary: "#ff9800",
  }
});
 