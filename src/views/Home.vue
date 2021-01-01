<template>
  <div class="home" id="button">
    <h1>{{ message }}</h1>
    <a href="network" id="buttonlarge" class="waves-effect waves-light btn-large">Join the System</a>
    <a  href="/services" id="buttonlarge" class="waves-effect waves-light btn-large">All Services</a>
    <a  href="/request" id="buttonlarge" class="waves-effect waves-light btn-large">Request Needs</a>
  </div>
</template>

<style>
#button {
  padding: 10%;
  margin: auto;
}

#buttonlarge {
  margin: 5%;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Indy 365!",
    };
  },
  created: function () {},
  methods: {},
};
</script>
