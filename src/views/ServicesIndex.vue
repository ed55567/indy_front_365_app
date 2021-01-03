<template>
  <div class="services-index">
    <h1>All Indiana Services</h1>
    <div id='map'></div>
    <div class="map-overlay">
      <fieldset>
        <input 
            id="feature-filter"
            type="text"
            placeholder="Filter results by name" />
         <input class="form-control" 
            id="input" 
            type="text" 
            v-model="serviceTerm" 
            placeholder="Search Service Type" />
         <input class="form-control"  
            id="input" 
            type="text" 
            v-model="cityTerm" 
            placeholder="Search City" />
            <div class = 'scroll'>
              <div  v-for="service in filterBy(filterBy(services, cityTerm, 'city'), serviceTerm, 'service_type')"> 
                <hr>
                <router-link to="/services">
                <h5>{{ service.name }}</h5>
                </router-link>
                <h6>Service Type: {{ service.service_type }}</h6>
                <p>Address: {{ service.address }}</p>
                <p>City: {{ service.city }}</p>
                <router-link to="/photos">Contact Info</router-link>
            </div>
        </div>
     </fieldset> 
      <div id="feature-listing" class="listing"></div>     
    </div>
    <br>
    
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.map-overlay {
  position: absolute;
  width: 35%;
  top: 0;
  bottom: 0;
  left: 0;
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
  background-color: #fff;
  max-height: 100%;
  overflow: hidden;
}

.map-overlay fieldset {
  /* display: none;
  background: #ddd;  */
  border: none;
  padding: 10px;
  margin: 0;
}

.map-overlay input {
  display: block;
  border: none;
  width: 100%;
  border-radius: 3px;
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
}

.map-overlay .listing {
  overflow: auto;
  max-height: 100%;
}

#input {
  margin: auto;
}
.form-control {
  display: block;
  max-width: 600px;
}

.scroll {
  position: absolute;
  top: 150px;
  bottom: 40px;
  overflow: scroll;
  margin: 0;
  padding: 0;

  -webkit-overflow-scrolling: touch;
}

/* Marker tweaks */
.mapboxgl-popup-close-button {
  display: contents;
}

.mapboxgl-popup-content {
  font: 400 15px/22px "Source Sans Pro", "Helvetica Neue", Sans-serif;
  padding: 0;
  width: 180px;
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
  margin-top: -15px;
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
  margin-top: 15px;
}

.mapboxgl-popup-anchor-top > .mapboxgl-popup-tip {
  border-bottom-color: #91c949;
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
    };
  },

  mounted: function () {
    // console.log(process.env.VUE_APP_MY_API_KEY)
    mapboxgl.accessToken = process.env.VUE_APP_MY_API_KEY;
    var map = new mapboxgl.Map({
      container: "map",
      style: "", // stylesheet location
      center: [-86.158066, 39.768402], // starting position [lng, lat]
      maxZoom: 18,
      minZoom: 7,
      zoom: 15, // starting zoom
    });

    function flyToStore(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15,
      });
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

      if (!features.length) {
        return;
      }

      var feature = features[0];

      var popup = new mapboxgl.Popup({ closeOnClick: false })
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
      console.log("services index", response);
      this.services = response.data;
    });
  },
};
</script>