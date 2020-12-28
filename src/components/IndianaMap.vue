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
mapboxgl.accessToken =
  "pk.eyJ1IjoiZWRhbmllbHM1NTUiLCJhIjoiY2tqMHExdnc1MGpoZTJycGhtcWxjemR6cyJ9.HFI61Th4IQguxzjt7kmVYw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
</script>

