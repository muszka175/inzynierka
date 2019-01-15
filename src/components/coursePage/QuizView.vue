<template>
  <div class="quiz-section" v-if="shuffledWords.length > 0">
    <div class="quiz-background">
      <div class="container cards">
        <div class="quiz-container">
          <v-content v-if="!type">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <div class="cube">
                  <a @click="selectType(1)">Kanji - Kana</a>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="cube">
                  <a @click="selectType(2)">Kanji - Polski</a>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="cube">
                  <a @click="selectType(3)">Kana - Polski</a>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="cube">
                  <a @click="selectType(4)">Polski - Kanji</a>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="cube">
                  <a @click="selectType(5)">Polski - Kana</a>
                </div>
              </div>
            </div>
          </v-content>
          <v-content v-if="type && !isEnd">
            <div class="row">
              <div class="game-holder col-md-12">
                <div class="result">
                Twój wynik:
                <span>{{this.points}}</span>
              </div>
                <div class="quiz">
                  <span
                    class="quizWord"
                    v-if="this.type === 1 || this.type === 2"
                  >{{ shuffledWords[this.index].kanji }}</span>
                  <span class="quizWord" v-if="this.type === 3">{{ shuffledWords[this.index].kana }}</span>
                  <span
                    class="quizWord"
                    v-if="this.type === 4 || this.type === 5"
                  >{{ shuffledWords[this.index].polish }}</span>
                </div>
                <div class="button-container">
                  <button
                    v-bind:class="{success: showSuccess && wordIndex === index, 
                    wrong: isWrong && clickedIndex === wordIndex}"
                    :disabled="clickedAnswer"
                    v-for="wordIndex in wordIndexes"
                    @click="checkResult(wordIndex)"
                    :key="wordIndex"
                  >
                    <span v-if="type === 1 || type === 5">{{ shuffledWords[wordIndex].kana }}</span>
                    <span v-if="type === 2 || type === 3">{{ shuffledWords[wordIndex].polish }}</span>
                    <span v-if="type === 4">{{ shuffledWords[wordIndex].kanji }}</span>
                  </button>
                </div>
                <v-btn @click="nextQuestion" class="secondary next" :disabled="this.clickedNext">Następne</v-btn>
                <div>
                  Pytanie:
                  <span>{{this.index +1}}/{{this.max_points = this.words.length}}</span>
                </div>
              </div>
            </div>
          </v-content>
        </div>
        <div v-if="isEnd">
          <end-game></end-game>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from "../../services/authService";
import EndGameComponent from "./EndGameComponent.vue";

export default {
  components: {
    "end-game": EndGameComponent
  },
  props: ["words", "type"],
  data() {
    return {
      index: 0,
      wordIndexes: [],
      shuffledWords: [],
      test: 0,
      showSuccess: false,
      isWrong: false,
      clickedIndex: -1,
      clickedNext: true,
      clickedAnswer: false,
      points: 0,
      type: 0,
      category: 0,
      game: 0,
      max_points: 0,
      isEnd: false
    };
  },
  methods: {
    selectType(type) {
      this.type = type;
    },
    shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
    checkResult(index) {
      console.log(index);
      this.clickedIndex = index;
      this.showSuccess = true;

      if (index === this.index) {
        this.isWrong = false;
        this.points += 1;
      } else {
        this.isWrong = true;
        this.points -= 1;
      }
      console.log("punkty", this.points);
      this.clickedAnswer = true;
      this.clickedNext = false;
    },
    nextQuestion() {
      this.index += 1;
      this.clickedNext = true;
      this.clickedAnswer = false;
      this.isWrong = false;
      this.showSuccess = false;
      this.randomWords();
      if (this.index === this.max_points) {
        this.isEnd = true;
      }
    },
    endGame() {
      this.isEnd = true;
    },
    randomWords() {
      this.wordIndexes.length = 0;
      let generatedIndex = -1;
      this.shuffledWords = this.words.slice();

      this.shuffle(this.shuffledWords);
      console.log("original", this.shuffledWords);
      console.log("pomieszane", this.words);

      this.wordIndexes.push(this.index);
      console.log("pierwszy", this.wordIndexes);

      while (this.wordIndexes.length < 4) {
        generatedIndex = Math.floor(Math.random() * this.words.length);
        if (this.wordIndexes.indexOf(generatedIndex) > -1) continue;
        console.log(generatedIndex);
        this.wordIndexes.push(generatedIndex);
      }
      this.shuffle(this.wordIndexes);
    }
  },
  created() {
    (this.category = this.$route.params.categoryId),
    (this.game = this.$route.params.gameId);
  },
  mounted() {
    this.randomWords();
  },
  beforeDestroy() {
    const gameProgress = {
      score: this.points,
      game: this.game,
      category: this.category,
      max_points: this.max_points
    };
    this.$http.post("progress", gameProgress, {
      headers: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    });
  },
  updated() {}
};
</script>
