<template>
 <div :style="image">
  <div class="home" id="button">
   
  </div>
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
  border-top: 3px solid #000;
  border-bottom: 3px solid #000;
  object-fit: cover;
  height: 24px;
}

#buttonlarge {
  margin: 5%;
  background-color: #d59f0f;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Indy 365",
      image: {
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/1/18/Indiana_State_Capitol_Market_St.jpg)",
      },
    };
  },
  created: function () {},
  methods: {},
};
</script>
