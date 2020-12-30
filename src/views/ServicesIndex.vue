<template>
   <div class="services-index">
     <h1>All Indiana Services</h1>
     <div id='map'></div> 
     <br>
        
        <input class="form-control" id="input" type="text" v-model="serviceTerm" placeholder="Search Service Type" />
        
        <input class="form-control"  id="input" type="text" v-model="cityTerm" placeholder="Search City" />
        <br>
        <div v-for="service in filterBy(filterBy(services, cityTerm, 'city'), serviceTerm, 'service_type')">
     <!-- <div v-for="service in services"> -->
       <hr>
        <h3>{{ service.name }}</h3>
        <!-- <img v-bind:src="service.url" v-bind:alt="service.name" /> -->
        <h6>Service Type: {{ service.service_type }}</h6>
        <p>Address: {{ service.address }}</p>
        <p>City: {{ service.city }}</p>
        <router-link to="/photos">Contact Info</router-link>
     </div>
   </div>
</template>

<style>
#map {
  width: 600px;
  height: 400px;
  margin: auto;
}

#input {
  margin: auto;
}
.form-control {
  display: block;
  max-width: 600px;
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
      style: "mapbox://styles/edaniels555/ckj8960t81g8z19phfvsgmxpn", // stylesheet location
      center: [-86.158066, 39.768402], // starting position [lng, lat]
      zoom: 6, // starting zoom
    });
    var marker = new mapboxgl.Marker().setLngLat([39.7684, 86.1581]).addTo(map);
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