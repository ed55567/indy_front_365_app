<template>
   <div class="services-index">
     <h1>All services</h1>
     <div v-for="service in services">
       <h2>{{ service.name }}</h2>
       <img v-bind:src="service.url" v-bind:alt="service.name" />
       <p>Width: {{ service.width }}</p>
       <p>Height: {{ service.height }}</p>
     </div>
   </div>
 </template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      services: [],
    };
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