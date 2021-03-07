<template lang="pug">
  .medicine-articles
    MainHeader
    .medicine-articles__title
      |Learn more about existing vaccines
    .medicine-articles__items
      router-link.medicine-articles-item(to="/medicine-article/1")
        .medicine-articles-item__title
          |Sputnik V COVID-19 vaccine
        .medicine-articles-item__info
          .medicine-articles-item__desc
            |Sputnik V is already registered in more than 40 countries. Russia's Sputnik V coronavirus vaccine gives around 92% protection against Covid-19, late stage trial results published in The Lancet reveal.
          .medicine-articles-item__img
            img(:src="sputnik", alt="alt")
      
      router-link.medicine-articles-item(to="/medicine-article/2")
        .medicine-articles-item__title
          |Pfizer-BioNTech COVID-19 Vaccine
        .medicine-articles-item__info
          .medicine-articles-item__desc
            |Based on evidence from clinical trials, the Pfizer-BioNTech vaccine was 95% effective at preventing laboratory-confirmed COVID-19 illness in people without evidence of previous infection.
          .medicine-articles-item__img
            img(:src="phaser", alt="alt")

</template>

<script>
import MainHeader from "./MainHeader";

// images
import sputnik from "../assets/img/medicine-items/sputnik.png";
import phaser from "../assets/img/medicine-items/phaser.png";

export default {
  data() {
    return {
      sputnik,
      phaser,
    };
  },
  components: {
    MainHeader,
  },
};
</script>

<style lang="sass">
.medicine-articles
  &__title
    font-weight: bold
    font-size: 36px
    color: #0E3360
    margin: 48px 0 0 64px
  &__items
    margin-top: 47px

    display: flex
    flex-direction: column
    width: 100%
  &-item
    width: 668px
    height: 364px
    background: #FFFFFF
    border: 2px solid #A5A5A5
    box-sizing: border-box
    border-radius: 16px
    display: flex
    margin: 0 auto
    margin-top: 24px
    flex-direction: column
    position: relative
    overflow: hidden
    color: #292929
    &__title
      font-size: 32px
      font-weight: bold
      color: #3F3F3F
      margin: 28px 0 0 28px
    &__info
      display: flex
      margin: 32px 0 0 28px
    &__desc
      width: 296px
    &__img
      position: absolute
      bottom: -3px
      right: 0
</style>
