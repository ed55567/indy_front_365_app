<template>
 <div :style="image" class="image">
  <div class="home" id="button">
   
  </div>
    <h1 class="title">{{ message }}</h1>
    <a href="network" id="buttonlarge" class="waves-effect waves-light btn-large">Join the System</a>
    <br>
    <a  href="/services" id="buttonlarge" class="waves-effect waves-light btn-large">All Services</a>
    <br>
    <a  href="/request" id="buttonlarge" class="waves-effect waves-light btn-large">Request Needs</a>
    <br>
  </div>
</template>

<style>
#buttonlarge {
  padding: 0%;
  margin: auto;
  object-fit: cover;
  position: relative;
}
.image {
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url
    "(https://upload.wikimedia.org/wikipedia/commons/1/18/Indiana_State_Capitol_Market_St.jpg)";
  background-size: cover;
}

.image::before {
  content: "";
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.25);
}

h1 {
  position: relative;
  color: #ffffff;
  font-size: 14rem;
  line-height: 0.9;
  text-align: center;
  color: #d59f0f;
  margin: auto;
}

.title {
  color: #d59f0f;
  margin: auto;
  font-size: 105px;
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
