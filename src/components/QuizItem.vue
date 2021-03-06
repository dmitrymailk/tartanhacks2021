<template lang="pug">
  router-link.quiz-item(:to="link" :class="quizItem")
    .quiz-item__info
      .quiz-item__title
        |{{title}}
      .quiz-item__button(:class="quizButton")
        |Take a quiz
    .quiz-item__img
      img(:src="imagePath", alt="alt")
</template>

<script>
export default {
  props: ["p_imagePath", "p_quizName", "p_type", "p_link"],
  data() {
    return {
      imagePath: this.p_imagePath,
      title: this.p_quizName,
      type: this.p_type,
      link: this.p_link,
    };
  },
  computed: {
    quizItem: function() {
      return "quiz-item_" + this.type;
    },
    quizButton: function() {
      return "quiz-item__button_" + this.type;
    },
  },
};
</script>

<style lang="sass">

.quiz-item
  width: 374px
  height: 174px
  border-radius: 16px
  display: flex
  position: relative
  margin-right: 30px
  &_symptoms
    background: #0C213E
  &_fact
    background: #443064
  &__info
    width: 200px
  &__title
    color: #FFFFFF
    font-weight: 500
    font-size: 24px
    margin: 20px 0 0 22px
  &__button
    border-radius: 8px
    width: 115px
    height: 42px
    color: #D5D5D5
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    bottom: 19px
    left: 22px
    &_symptoms
      background: #233750
    &_fact
      background: #56476F
  &__img
    display: flex
    position: relative
    width: calc(100% - 200px)
    img
      position: absolute
      right: 30px
      top: 20px
</style>
