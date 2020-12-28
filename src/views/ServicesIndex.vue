<template>
   <div class="services-index">
     <h1>All Services</h1>
     <div id='map'></div> 
     <div class="dropdown">
    <input class="dropdown-input" type="text" placeholder="Service Type" />
    <div class="dropdown-list"></div>
  </div>
     <input class="form-control" type="text" v-model="cityTerm" placeholder="Search City" />
     <div v-for="service in filterBy(services, cityTerm, 'city')">
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
      // serviceTerm "",
    };
  },
  //   mapboxgl.accessToken ="pk.eyJ1IjoiZWRhbmllbHM1NTUiLCJhIjoiY2tqMHExdnc1MGpoZTJycGhtcWxjemR6cyJ9.HFI61Th4IQguxzjt7kmVYw";
  //  var map = new mapboxgl.Map({
  //   container: "map",
  //   style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  //   center: [-74.5, 40], // starting position [lng, lat]
  //   zoom: 9, // starting zoom
  // }),
  created: function () {
    axios.get("/api/services").then((response) => {
      console.log("services index", response);
      this.services = response.data;
    });
  },
  methods: {},
};
</script>