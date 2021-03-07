<template lang="pug">
  .hospital-page
    MainHeader
    .hospital-page__title
      |Find hospitals nearby
    .hospital-page__search-block
      input.hospital-page__search(placeholder="Hospital name")
      img(:src="lope", alt="alt")
    #map
</template>

<script>
import MainHeader from "./MainHeader";

// images
import lope from "../assets/img/hospital-page/lope.svg";

export default {
  components: {
    MainHeader,
  },
  data() {
    return {
      map: null,
      lope,
      first: true,
    };
  },

  mounted() {
    let map = new self.google.maps.Map(document.getElementById("map"), {
      center: { lat: 40.407562, lng: -80.009684 },
      zoom: 11,
    });
    this.map = map;

    // find near
    this.findNear("hospitals");

    // center
  },
  methods: {
    createMarkers: function(places) {
      places.forEach((place) => {
        let marker = new self.google.maps.Marker({
          position: place.geometry.location,
          map: this.map,
          title: place.name,
          clickable: true,
        });
        marker.addListener("click", () => {
          // console.log();
          let lat = place.geometry.location.lat();
          let lng = place.geometry.location.lng();
          this.map.setCenter({ lat, lng });

          let title = place.name;
          this.showElement(title);
        });
      });
    },

    findNear: function(keyword) {
      let search = new self.google.maps.places.PlacesService(this.map);
      let routeRequest = {
        location: this.map.center,
        rankBy: self.google.maps.places.RankBy.DISTANCE,
        keyword: keyword,
      };
      let callback = (results, status) => {
        if (status == self.google.maps.places.PlacesServiceStatus.OK) {
          console.log("RES", results, status);
          this.createMarkers(results);
        }
      };

      search.nearbySearch(routeRequest, callback);

      console.log(search, callback);
    },
    showElement: function(_title) {
      const controlDiv = document.createElement("div");
      let title = document.createElement("div");
      title.textContent = _title;
      title.classList.add("hospital__card-title");

      controlDiv.classList.add("hospital__card");
      controlDiv.appendChild(title);

      //
      if (
        this.map.controls[self.google.maps.ControlPosition.TOP_RIGHT].length > 0
      ) {
        this.map.controls[self.google.maps.ControlPosition.TOP_RIGHT].pop();
      }
      this.map.controls[self.google.maps.ControlPosition.TOP_RIGHT].push(
        controlDiv
      );
    },
  },
};
</script>

<style lang="sass">
.hospital__card
  top: 0
  right: 16px
  // margin-top: 100px
  background: #fff
  border: 2px solid #969696
  box-sizing: border-box
  border-radius: 8px 8px 8px 0px
  width: 326px
  // max-height: 164px
  position: absolute
  height: 164px
  // margin: 60px 0 0 286px
  &-title
    font-family: Quicksand
    font-style: normal
    font-weight: 500
    font-size: 22px
    line-height: 27px
    color: #000000
    margin: 10px 0 0 14px


.hospital-page
  &__title
    font-weight: bold
    font-size: 36px
    margin: 48px 0 0 64px
    color: #0E3360
  &__search-block
    width: 650px
    height: 56px
    border: 2px solid #0E3360
    box-sizing: border-box
    border-radius: 16px
    display: flex
    align-items: center
    margin: 16px 0 0 64px
    input
      height: 100%
      border: none
      border-radius: 16px
      outline: none !important
      padding: 0 0 0 12px
      width: calc(100% - 50px)
    img
      cursor: pointer




#map
  width: 680px
  height: 510px
  margin: 24px 64px
</style>
