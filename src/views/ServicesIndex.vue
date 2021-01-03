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
  width: 25%;
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

.map-overlay .listing > * {
  display: block;
  padding: 5px 10px;
  margin: 0;
}

.map-overlay .listing a {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: #404;
  text-decoration: none;
}

.map-overlay .listing a:last-child {
  border: none;
}

.map-overlay .listing a:hover {
  background: #f0f0f0;
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
</style>

<script>
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
      maxzoom: 18,
      minzoom: 7,
      zoom: 15, // starting zoom
    });
    map.on("click", function (e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ["indiana-services"], // replace this with the name of the layer
      });

      if (!features.length) {
        return;
      }

      var feature = features[0];

      var popup = new mapboxgl.Popup({ offset: [0, -5] })
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
  methods: {},
};
</script>