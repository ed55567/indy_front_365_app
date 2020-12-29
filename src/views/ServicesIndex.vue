<template>
   <div class="services-index">
     <h1>All Indiana Services</h1>
     <div id='map'></div> 
     <br>
     <input class="form-control" type="text" v-model="serviceTerm" placeholder="Search Service Type" />
     <input class="form-control" type="text" v-model="cityTerm" placeholder="Search City" />
     <div v-for="service in filterBy(filterBy(services, cityTerm, 'city'), serviceTerm, 'service_type')">
       
     <!-- <div v-for="service in services"> -->
       <hr>
        <h2>{{ service.name }}</h2>
        <!-- <img v-bind:src="service.url" v-bind:alt="service.name" /> -->
        <p>Service Type: {{ service.service_type }}</p>
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
}

.form-control {
  padding: 1%;
  margin: auto;
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