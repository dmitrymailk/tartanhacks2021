<template lang="pug">
  .quiz-result
    MainHeader
    .quiz-result__img
      img(:src="scenarios[quizResultType].img", alt="alt")
    .quiz-result__title
      |{{scenarios[quizResultType].title}}
    .quiz-result__desc
      |{{text}}
    router-link.quiz-result__return(to="/")
      |OK

</template>

<script>
import MainHeader from "./MainHeader";

import success from "../assets/img/quiz-result/success.svg";
import sick from "../assets/img/quiz-result/sick.svg";

export default {
  components: {
    MainHeader,
  },
  data() {
    return {
      success,
      sick,
      scenarios: [
        {
          text:
            "You answered 2/5 questions correctly! You know a little information about the Covid-19. Check out more info about Covid-19 in order not to get ill!",
          title: "Not enough!",
          img: sick,
        },
        {
          text:
            "You answered 5/5 questions correctly! Congradulations, you know everything about the Covid-19. Should you consider travelling during this difficult time? :)",
          title: "Congratulations!",
          img: success,
        },
      ],
      text: "",
    };
  },
  computed: {
    quizResultType: function() {
      let points = this.$store.state.correctPoints;
      if (points < 4) {
        return 0;
      }
      return 1;
    },
  },
  created() {
    let points = this.$store.state.correctPoints;
    if (points < 4) {
      this.text = `You answered ${points}/5 questions correctly! You know a little information about the Covid-19. Check out more info about Covid-19 in order not to get ill!`;
    } else {
      this.text = `You answered ${points}/5 questions correctly! Congradulations, you know everything about the Covid-19. Should you consider travelling during this difficult time? :)`;
    }
  },
};
</script>

<style lang="sass">
.quiz-result
  height: 100vh
  min-height: 100%
  background: #0E3360
  display: flex
  flex-direction: column
  &__img
    margin: 0 auto
    margin-top: 131px
    img
      max-height: 350px
  &__title
    font-weight: bold
    font-size: 48px
    color: #FFFFFF
    margin-top: 24px
    text-align: center
  &__desc
    font-size: 24px
    color: #FFFFFF
    max-width: 668px
    text-align: center
    margin: 32px auto 0 auto
  &__return
    border: 2px solid #FFFFFF
    box-sizing: border-box
    border-radius: 16px
    width: 111px
    height: 40px
    margin: 32px auto 0 auto
    color: #FFFFFF
    display: flex
    align-items: center
    justify-content: center
</style>
