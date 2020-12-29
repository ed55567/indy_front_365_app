<template>
  <div id='map'></div>  
</template>


<style>
#map {
  width: 400px;
  height: 300px;
}
</style>

<script>
mapboxgl.accessToken = "process.env.VUE_APP_MY_API_KEY";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
</script>

