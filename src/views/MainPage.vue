<template lang="pug">
  //- ------------- MAIN PAGE --------------
  .fragment
    .main-page
      MainHeader
      img(:src="img").main-page__corona
      .main-page__small-slogan
        |COVID19
      .main-page__big-slogan
        |#Stayhome
      .main-page__text
        |If you think you have coronavirus (COVID-19) symptoms or have been in close contact with someone who has it, use this self-assesment to help determine how to seek further care.
      router-link.main-page__button(to="/read-more/")
        |Read More
    //- ------------- SERVICES BLOCK --------------
    .services-block 
      .services-block__decorate
      .services-block__service-items
        ServiceItem(v-for="item in serviceItems" 
                    :p_imagePath="item.imgPath" 
                    :p_serviceName="item.title" 
                    :p_type="item.type"
                    :p_link="item.link"
                    )
      .quizzes-block
        .quizzes-block__quizzes-items
          QuizItem(v-for="item in quizzesItems" 
                      :p_imagePath="item.imgPath" 
                      :p_quizName="item.title" 
                      :p_type="item.type"
                      :p_link="item.link")

</template>

<script>
// components
import MainHeader from "./MainHeader";
import ServiceItem from "../components/ServiceItem";
import QuizItem from "../components/QuizItem";

// images
import img from "../assets/img/main-page/virus.svg";

// services images
import hospitalImg from "../assets/img/main-page/services/hospital.svg";
import medicineImg from "../assets/img/main-page/services/medicine.svg";
import consultencyImg from "../assets/img/main-page/services/consultency.svg";
import travelingImg from "../assets/img/main-page/services/traveling.svg";
import volunteeringImg from "../assets/img/main-page/services/volunteering.svg";

// quizzes images
import symptoms from "../assets/img/main-page/quizzes/symptoms.svg";
import fact from "../assets/img/main-page/quizzes/fact.svg";

export default {
  name: "MainPage",
  data() {
    return {
      img,
      serviceItems: [
        {
          title: "Hospital",
          imgPath: hospitalImg,
          type: "hospital",
          link: "",
        },
        {
          title: "Medicine",
          imgPath: medicineImg,
          type: "medicine",
          link: "/medicine-articles",
        },
        {
          title: "Consultency",
          imgPath: consultencyImg,
          type: "consultency",
          link: "",
        },
        {
          title: "Travelling",
          imgPath: travelingImg,
          type: "traveling",
          link: "",
        },
        {
          title: "Volunteering",
          imgPath: volunteeringImg,
          type: "volunteering",
          link: "",
        },
      ],
      quizzesItems: [
        {
          title: "5 Simptoms\n of Corona",
          imgPath: symptoms,
          type: "symptoms",
          link: "",
        },
        {
          title: "Top 5 facts\n about Covid-19",
          imgPath: fact,
          type: "fact",
          link: "",
        },
      ],
    };
  },
  components: {
    MainHeader,
    ServiceItem,
    QuizItem,
  },
};
</script>

<style lang="sass">
// ------------- MAIN PAGE --------------
.main-page
  height: 497px
  background: #EEA2A3
  border-radius: 0px 0px 64px 64px
  color: #1A1D5A
  position: relative
  z-index: 2
  &__corona
    position: absolute
    right: 64px
    top: 64px
  &__small-slogan
    font-weight: bold
    font-size: 32px
    margin: 0 0 0 64px
  &__big-slogan
    margin: 12px 0 0 64px
    font-size: 48px
    font-weight: bold
  &__text
    margin: 22px 0 0 64px
    font-size: 18px
    max-width: 646px
    font-size: 18px
  &__button
    margin: 22px 0 0 64px
    width: 122px
    height: 40px
    font-size: 16px
    display: flex
    align-items: center
    justify-content: center
    border: 2px solid #1A1D5A
    box-sizing: border-box
    border-radius: 8px
    font-weight: 600
    color: #1A1D5A
// ------------- MAIN PAGE --------------
.services-block
  min-height: 584px
  height: calc(100% - 497px - 96px)
  width: calc(100% - 128px)
  background: #0E3360
  position: relative
  padding: 48px 64px 64px 64px
  &__decorate
    position: absolute
    height: 64px
    width: 100%
    background: #0E3360
    top: -64px
    left: 0
  &__service-items
    display: grid
    grid-template-columns: 269px 269px 269px
    grid-template-rows: 86px 86px
    grid-gap: 28px 38px
    max-width: 786px
    width: 100%
    height: 200px

.quizzes-block
  margin-top: 20px
  &__quizzes-items
    display: flex
</style>
