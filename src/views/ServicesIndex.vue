<template>
  <div class="services-index">
    <div id='map'></div>
    <div class="map-overlay">
      <fieldset>
         <input class="form-control" 
            id="input" 
            type="geocoder" 
            v-model="serviceTerm" 
            placeholder="Search Service Type" />
         <input class="form-control"  
            id="input" 
            type="geocoder" 
            v-model="cityTerm" 
            placeholder="Search City" />
          <input class="form-control" 
            id="input" 
            type="geocoder" 
            v-model="nameTerm" 
            placeholder="Search Service Name" />
            <button class="reset" v-on:click="resetOptions">Reset</button>
            <div class ='scroll'>
              
                  <div v-for="service in filterBy(filterBy(filterBy(services, cityTerm, 'city',), serviceTerm, 'service_type' ), nameTerm,'name')"> 
                    <hr>
                    <h5>{{ service.name }}</h5>
                    <h6>Service Type: {{ service.service_type }}</h6>
                    <p>Address: {{ service.address }}</p>
                    <p>City: {{ service.city }}</p>
                    <router-link to="/photos">Contact Info</router-link>
                  </div>
        </div>
     </fieldset> 
      <div id="feature-listing" class="listing"></div>     
    </div>
  </div>
</template>

<style>
body {
  margin: auto;
  padding: auto;
}
#map {
  position: absolute;
  top: 100px;
  bottom: 0;
  width: 100%;
  border: solid;
  padding: auto;
}

.map-overlay {
  position: absolute;
  width: 35%;
  top: 100px;
  bottom: 0;
  left: 0;
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
  background-color: #fff;
  max-height: 100%;
  overflow: hidden;
  border: solid;
}

.map-overlay fieldset {
  display: block;
  border: 2px solid;
  border: none;
  padding: 10px;
  margin: 0;
}

.map-overlay input {
  display: block;
  border: groove;
  width: 100%;
  border-radius: 0.5px;
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
  border: solid;
}

.map-overlay .listing {
  overflow: auto;
  max-height: 100%;
}
.scroll {
  position: absolute;
  top: 150px;
  bottom: 40px;
  overflow: scroll;
  margin: 0;
  padding: 0;
}

/* Marker tweaks */
.mapboxgl-popup-close-button {
  border-bottom-color: #91c949;
}

.mapboxgl-popup-content {
  color: #ffffff;
  background-color: #394380;
  border-color: #d59f0f;
  max-width: 250px;
  box-shadow: 3px 3px 2px #000f5d;
  font-family: "roboto";
}

.mapboxgl-popup-content-wrapper {
  padding: 1%;
}

.mapboxgl-popup-content h3 {
  background: #91c949;
  color: #fff;
  margin: 0;
  display: block;
  padding: 10px;
  border-radius: 3px 3px 0 0;
  font-weight: 700;
  margin-top: 15px;
}

.mapboxgl-popup-content h4 {
  margin: 0;
  display: block;
  padding: 10px;
  font-weight: 400;
}

.mapboxgl-popup-content div {
  padding: 10px;
}

.mapboxgl-container .leaflet-marker-icon {
  cursor: pointer;
}

.mapboxgl-popup-anchor-top > .mapboxgl-popup-content {
  margin-top: 5px;
}

.mapboxgl-popup-anchor-top > .mapboxgl-popup-tip {
  border-bottom-color: #91c949;
}

.geocoder {
  position: relative;
  z-index: 1;
  width: 50%;
  left: 50%;
  margin-left: -25%;
  top: 10px;
}
.mapboxgl-ctrl-geocoder {
  padding: 4%;
  position: relative;
}
#map {
  margin-top: 0px;
}

.reset {
  top: -10px;
}
</style>


<script>
/* This will let you use the .remove() function later on */
if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}
import Vue from "vue";
import Vue2Filters from "vue2-filters";
import axios from "axios";

Vue.use(Vue2Filters);

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      services: [],
      cityTerm: "",
      serviceTerm: "",
      nameTerm: "",
    };
  },

  mounted: function () {
    // console.log(process.env.VUE_APP_MY_API_KEY)
    mapboxgl.accessToken = process.env.VUE_APP_MY_API_KEY;
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/edaniels555/ckjdngp1717xk19s04m2v3ik4", // style URL
      center: [-86.158066, 39.768402], // starting position [lng, lat]
      maxZoom: 18,
      minZoom: 7,
      zoom: 15, // starting zoom
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        placeholder: "Search for Address",
        // limit results to united states
        // countries: "USA",
        queryOptions: {
          country: "us",
          cityTerm: "",
        },

        // further limit results to the geographic bounds representing the region of
        // New South Wales
        bbox: [-88.088379, 37.579413, -84.79248, 41.787697],
        mapboxgl: mapboxgl,
      })
    );

    function render(feature) {
      return `<span class='geocoder-menu-item'>${feature.properties.cityTerm}</span>`;
    }

    function createPopUp(currentFeature) {
      var popUps = document.getElementsByClassName("mapboxgl-popup");
      /** Check if there is already a popup on the map and if so, remove it */
      if (popUps[0]) popUps[0].remove();
    }

    map.on("click", function (e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ["indiana-services"], // replace this with the name of the layer
      });

      var feature = features[0];
      var popup = new mapboxgl.Popup({})
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          "<h6>" +
            feature.properties.Provider +
            "</h3><p>" +
            feature.properties.Service +
            "</p>" +
            feature.properties.Address +
            "</p>"
        )
        .addTo(map);
    });
  },

  created: function () {
    axios.get("/api/services").then((response) => {
      console.log("services", response);
      this.services = response.data;
    });
  },
  methods: {
    resetOptions() {
      this.cityTerm = null;
      this.serviceTerm = null;
      this.nameTerm = null;
    },
  },
};
</script>