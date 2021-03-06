<template lang="pug">
  .main-header
    router-link.main-header__item(:to="{path:item.link}" v-for="(item, index) in menuItems" )
      |{{item['name']}}

      
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          link: "",
          name: "Home",
        },
        {
          link: "",
          name: "About",
        },
        {
          link: "",
          name: "Healthcare",
        },
        {
          link: "",
          name: "FAQ",
        },
      ],
    };
  },
};
</script>

<style lang="sass">
.main-header
  display: flex
  width: calc(100% - 128px)
  padding: 64px 64px 48px 64px
  border-radius: 0px 0px 64px 64px
  background: #EEA2A3
  &__item
    // width: 88px
    margin-right: 48px
    height: 30px
    display: flex
    justify-content: center
    align-items: center
    color: #1A1D5A
    font-size: 18px
</style>
