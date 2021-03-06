<template lang="pug">
  router-link.service-item(:to="link")
    .service-item__img(:class="serviceType")
      img(:src="imagePath", alt="alt")
    .service-item__title
      |{{serviceName}}
</template>

<script>
export default {
  props: ["p_imagePath", "p_serviceName", "p_type", "p_link"],
  data() {
    return {
      imagePath: this.p_imagePath,
      serviceName: this.p_serviceName,
      type: this.p_type,
      link: this.p_link,
    };
  },
  computed: {
    serviceType: function() {
      return "service-item__img_" + this.type;
    },
  },
};
</script>

<style lang="sass">
.service-item
  width: 269px
  height: 86px
  background: #264772
  border-radius: 16px
  display: flex
  align-items: center
  &__img
    width: 58px
    height: 58px
    border-radius: 16px
    margin-left: 19px
    display: grid
    align-items: center
    justify-content: center
    &_hospital
      background: #4C5CF1
    &_medicine
      background: #FE7543
    &_consultency
      background: #EFC02A
    &_traveling
      background: #B638F1
    &_volunteering
      background: #008E69
  &__title
    font-weight: 500
    color: #FFFFFF
    margin-left: 20px
    font-size: 24px
</style>
