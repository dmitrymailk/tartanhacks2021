<template lang="pug">
  .quiz-page
    MainHeader
    .quiz-page__title
      |Quiz "Top 5 facts about Covid-19"
    .quiz-page__progress
      |{{step+1}} / 5
    .quiz-card
      .quiz-card__img
        img(:src="quizQuestions[step].img", alt="alt")
      .quiz-card__desc
        |{{quizQuestions[step].text}}
    .quiz-card__controls
      .quiz-card__button.quiz-card__button_false(@click="questionAnswer(false)")
        |False
      .quiz-card__button.quiz-card__button_true(@click="questionAnswer(true)")
        |True
    .quiz-card__tip
      |{{status}} {{tip}}
    

    
</template>

<script>
import MainHeader from "./MainHeader";

// quiz images
import image_1 from "../assets/img/quiz/1.png";
import image_2 from "../assets/img/quiz/2.png";
import image_3 from "../assets/img/quiz/3.png";
import image_4 from "../assets/img/quiz/4.png";
import image_5 from "../assets/img/quiz/5.png";

export default {
  components: {
    MainHeader,
  },

  data() {
    return {
      step: 0,
      quizQuestions: [
        {
          text: "County with the most number of cases of Covid-19 is India.",
          img: image_1,
          answer: false,
          tip: "It's the USA with almost 30 million people got the disease.",
        },
        {
          text: "There is one of the strictest lockdowns in Australia.",
          img: image_2,
          answer: true,
          tip: "People should have stayed inside for more that 100 days",
        },
        {
          text: "The second country where Covid-19 was found is South Korea.",
          img: image_3,
          answer: true,
          tip: "The first case was found on 20th of January of 2020.",
        },
        {
          text:
            "Italy is the country which has not impost the lockdown for the long time after the first case in the country.",
          img: image_4,
          answer: false,
          tip:
            "Italy has introduced restrictions right after the number of cases started growing up but Sweden has not introduced the lockdown for a long time, and schools worked up to the end of May 2020",
        },
        {
          text:
            "The USA is the country with the most number of death caused by Covid-19.",
          img: image_5,
          answer: true,
          tip: "They have registered almost 300.000 number of deaths",
        },
      ],
      correct: 0,
      tip: "",
      status: "",
    };
  },

  methods: {
    questionAnswer(answer) {
      const cond = this.step < this.quizQuestions.length - 1;
      let tip = this.quizQuestions[this.step].tip;
      if (cond) {
        const awr = this.quizQuestions[this.step].answer == answer;
        this.status = "Incorrect!";
        if (awr) {
          this.correct += 1;
          this.status = "Correct!";
        }
        this.tip = tip;
        setTimeout(() => {
          this.step += 1;
          this.tip = "";
          this.status = "";
        }, 2000);
      } else {
        const awr = this.quizQuestions[this.step].answer == answer;
        this.status = "Incorrect!";
        if (awr) {
          this.correct += 1;
          this.status = "Correct!";
        }
        this.tip = tip;

        setTimeout(() => {
          this.$store.commit("incrementPoints", this.correct);
          this.$router.push(`/quiz-result/`);
        }, 2000);
      }
    },
  },
};
</script>

<style lang="sass">
.quiz-page
  height: 100vh
  min-height: 100%
  background: #0E3360
  display: flex
  flex-direction: column
  &__title
    margin: 48px 0 0 64px
    color: #fff
    font-size: 24px
    font-weight: bold
  &__progress
    font-size: 32px
    font-weight: bold
    margin: 0 auto
    display: flex
    color: #fff


.quiz-card
  width: 540px
  height: 353px
  display: flex
  flex-direction: column
  margin: 0 auto
  margin-top: 32px
  &__img
    height: 237px
    width: 100%
  &__desc
    background: #264772
    border-radius: 0px 0px 16px 16px
    height: 116px
    display: flex
    align-items: center
    justify-content: center
    font-weight: bold
    font-size: 110%
    padding: 16px
    text-align: center
    color: #DEDEDE
  &__controls
    width: 540px
    margin: 0 auto
    display: flex
    justify-content: space-between
    margin-top: 36px
  &__button
    border-radius: 8px
    width: 170px
    height: 65px
    font-weight: bold
    font-size: 26px
    cursor: pointer
    color: #FFFFFF
    display: flex
    align-items: center
    justify-content: center
    &_true
      background: #4E9B03
    &_false
      background: #EB502E
  &__tip
    width: 540px
    margin: 0 auto
    display: flex
    margin-top: 36px
    align-items: center
    justify-content: center
    color: #fff
    font-size: 20px
</style>
