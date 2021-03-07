<template lang="pug">
  .article-reader
    .wrapper
      .article-reader__title
        |{{text.title}}

      <template v-for="item in text.data">
        p(v-if="item.type === 'sentence'")
          |{{item.content}}
        .article-reader__img(v-else-if="item.type === 'image'")
          img(:src="item.content", alt="") 
        h2(v-else-if="item.type === 'subtitle'")
          |{{item.content}}
      </template>
      .article-reader__empty
</template>

<script>
import { staticFiles } from "../utils/api";

export default {
  data() {
    return {
      text: {},
    };
  },

  created() {
    staticFiles.get(`readmore-v-2.json`).then((res) => {
      this.text = res.data;
    });
  },
};
</script>

<style lang="sass">
.article-reader
  display: flex
  width: 100%
  max-width: 100%
  background: #FFFFFF
  color: rgba(0, 0, 0, 0.84)
  font-family: 'Merriweather', serif !important
  justify-content: center
  overflow-y: scroll
  .wrapper
    margin: 0 24px
    padding-bottom: 40px
    max-width: 681px
    p
      margin: 2em 0 0 0
      line-height: 2em
      font-size: 19px
      font-family: 'Merriweather', serif !important
      span
        height: 25px
        display: inline-flex
        align-items: center
        margin-right: 6px
        font-size: 19px
        border-radius: 4px
        // &.active
        //   background: rgba(95, 242, 225, 0.506)
    // span:hover
    //   cursor: pointer
    //   background: rgba(0,0,0,.1)


    h2
      margin-top: 1.95em
      font-family: 'Merriweather', serif !important
  &__title
    font-size: 40px
    // font-weight: 400
    width: 100%
    font-family: 'Merriweather', serif !important
    margin-top: 24px
    span
      font-size: 40px
      height: 30px
      display: inline-flex
      align-items: center
      margin-right: 10px
      border-radius: 4px
      white-space: nowrap
      &.active
        background: rgba(95, 242, 225, 0.506)

  &__img
    width: 100%
    height: auto
    margin: 60px 0
    display: flex
    img
      width: 100%
      height: auto
  &__empty
    width: 100%
    height: 100px
    display: flex
</style>
