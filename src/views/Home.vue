<template>
 <div :style="image" class="image">
  <div class="home" id="button"> 
  </div>
  <!-- <img :src="image" > -->
  <div :style="imagePath" class="state"></div>
    <h1 class="title" >{{ message }}</h1> 
    <div class="row">
    <a  href="/request" id="buttonlarge_home" class="waves-effect waves-light btn-large btn3">Request Needs</a>
    <br>
    <a  href="/services" id="buttonlarge_home" class="waves-effect waves-light btn-large btn2">All Services</a>
    <br>
    <a href="signup"  id="buttonlarge_home" class="waves-effect waves-light btn-large btn1">Sign Up Services</a>
    <div class="clear"></div>
  
    <br>
    </div>
  </div>
</template>

<style>
.row {
  display: inline-block;
  top: 100px;
}

.btn1 {
  margin-bottom: 30px;
  margin-left: 150px;
  left: 150px;
}

.btn2 {
  margin-bottom: 30px;
  margin-left: 150px;
}

.btn3 {
  margin-bottom: 30px;
  margin-left: 150px;
  left: -200px;
}

.clear {
  clear: both;
}

#buttonlarge_home {
  right: 22px;
  top: 150px;
  width: 100%;
  display: block;
  border: none;
  color: white;
  padding: 4px 4px;
  text-decoration: none;
  line-height: 50px;
  font-size: 16px;
  /* background-color: #d59f0f; */
  margin-left: 10px;
  overflow: hidden;
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
  position: absolute;
  top: 150px;
  padding: 10px;
  text-shadow: 1px 1px 2px black, 0 0 10px rgb(0, 0, 0), 0 0 3px darkblue;
}

.wave {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 70px;
  width: 100%;
  background: dodgerblue;
  z-index: -1;
}

.wave::before {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 90%;
  width: 51%;
  height: 75px;
  background-color: white;
  right: 0px;
  top: 35px;
}

.wave::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 100% 90%;
  width: 51%;
  height: 75px;
  background-color: dodgerblue;
  left: -8px;
  top: 25px;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Indy 365",
      imagePath: {
        backgroundImage: "url('/indiana_state_color.png')",
      },
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
