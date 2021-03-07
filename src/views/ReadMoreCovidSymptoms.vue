<template lang="pug">
  .read-more-symptoms
    MainHeader
    ArticleReader
    
</template>

<script>
import MainHeader from "./MainHeader";
import ArticleReader from "../components/ArticleReader.vue";

export default {
  components: {
    MainHeader,
    ArticleReader,
  },
};
</script>
