<template lang="pug">
  .app
    router-view
  </div>
</template>

<script>
import "@/assets/style/normalize.css";
import "./assets/style/index.sass"
import MainPage from "@/views/MainPage.vue";
export default {
  components: {
    MainPage,
  },
};
</script>
