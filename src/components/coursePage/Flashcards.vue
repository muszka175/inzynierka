<template>
    <div class="flashcards-section" v-if="this.words.length > 0">
      <div class="flashcards-background">
        <div class="container cards">
            <div class="type-buttons" v-if="!type">
              <div class="row">
              <div class="cube-container col-md-4"><div class="cube"><a @click="selectType(1)">Kanji</a></div></div>
              <div class="cube-container col-md-4"><div class="cube"><a @click="selectType(2)">Kana</a></div></div>
              <div class="cube-container col-md-4"><div class="cube"><a @click="selectType(3)">Polski</a></div></div>
              </div>
            </div>
            <div v-if="type">
          <div class="row">
            <div class="flashcards-container col-lg-6 col-md-8 col-sm-8">
              <div class="flashcards"> 
                <span class="flashcardWord" v-if="this.type === 1">{{ words[this.index].kanji }}</span>
                <span class="flashcardWord" v-if="this.type === 2">{{ words[this.index].kana }}</span>
                <span class="flashcardWord" v-if="this.type === 3">{{ words[this.index].polish }}</span>
              </div>
              <div class="helper-container">
                <div class="answers" v-if="this.type === 1">
                  <div><span v-if="result===false">kana</span><span v-if="result===true">{{words[this.index].kana }}</span></div>
                  <div><span v-if="result===false">polski</span><span v-if="result===true">{{words[this.index].polish }}</span></div>
                </div>
                <div class="answers" v-if="this.type === 2">
                  <div><span v-if="result===false">kanji</span><span v-if="result===true">{{words[this.index].kanji }}</span></div>
                  <div><span v-if="result===false">polski</span><span v-if="result===true">{{words[this.index].polish }}</span></div>
                </div>
                <div class="answers" v-if="this.type === 3">
                  <div><span v-if="result===false">kanji</span><span v-if="result===true">{{words[this.index].kanji }}</span></div>
                  <div><span v-if="result===false">kana</span><span v-if="result===true">{{words[this.index].kana }}</span></div>
                </div>
              </div>
              <div class="submit-container">
                <input @click="changeWord" class="true" type="submit" value="Znam"/>
                <input @click="showResult" class="false" type="submit" value="Nie znam"/>
              </div>
              <div>Pytanie: <span>{{this.index +1}}/{{this.max_points = this.words.length }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import authService from "../../services/authService";

export default {
  props: ['words'],
  data() {
    return {
      index: 0,
      result: false,
      type: 0,
      category: 0,
      game: 0,
      max_points: 0,
    };
  },
  methods: {
    selectType(type) {
      this.type = type;
    },
    showResult(){
      this.result = true;
    },
    changeWord(){
      this.index += 1;
      this.result = false;
    }
  },
  created() {
    console.log('params', this.$route.params.gameId, this.$route.params.categoryId, this.index)
    this.category = this.$route.params.categoryId,
    this.game = this.$route.params.gameId
  },
  beforeDestroy() {
    const gameProgress = {
      score: this.index,
      game: this.game,
      category: this.category,
      max_points: this.max_points,
    };
    this.$http.post("progress", gameProgress, {
      headers: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    }).then(response => {
      console.log('wysłano')
    })
  }
};
</script>