<template>
   <div class="services-new">
     <h1>Join The System</h1>
     <form v-on:submit.prevent="createService()">
       <ul>
         <li v-for="error in errors">{{ error }}</li>
       </ul>
     </form>
       <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input placeholder="First Name" id="icon_prefix" type="text" v-model="newServiceFName" class="validate">
          <label for="icon_prefix"></label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input placeholder="Last Name" id="icon_telephone" type="tel" v-model="newServiceLName" class="validate">
          <label for="icon_telephone"></label>
        </div>
         <div class="input-field col s6">
          <i class="material-icons prefix">business</i>
          <input placeholder="Service Name" id="icon_prefix" type="text" v-model="newServiceName" class="validate">
          <label for="icon_prefix"></label>
        </div>
         <div class="input-field col s6">
          <i class="material-icons prefix">business</i>
          <input placeholder="Address" id="icon_prefix" type="text" v-model="newServiceAddress" class="validate">
          <label for="icon_prefix"></label>
        </div>
         <div class="input-field col s6">
          <i class="material-icons prefix">business_center</i>
          <input placeholder="Job Title" id="icon_prefix" type="text" v-model="newServiceJob" class="validate">
          <label for="icon_prefix"></label>
        </div>
         <div class="input-field col s6">
          <i class="material-icons prefix">location_city</i>
          <input placeholder="City" id="icon_prefix" type="text" v-model="newServiceCity" class="validate">
          <label for="icon_prefix"></label>
        </div>
         <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input placeholder="Email" id="icon_prefix" type="text" v-model="newServiceEmail" class="validate">
          <label for="icon_prefix"></label>
        </div>
      </div>
      <input type="submit" id="buttonlarge" class="waves-effect waves-light btn-large" value="Join" /> 
    </form>
   </div>
  </div>
</template>

<style>
.services-new {
  margin: auto;
  padding: 3%;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newServiceFName: "Tommy",
      newServiceLName: "Gunn",
      newServiceName: "Rocky 5",
      newServiceJob: "Boxer",
      newServiceAddress: "305 North philadelphia ",
      newServiceCity: "philadelphia",
      newServiceEmail: "tommythemachinegunn@gmail.com",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createService: function () {
      var params = {
        fname: this.newServiceFName,
        lname: this.newServiceLName,
        name: this.newServiceName,
        Job: this.newServiceJob,
        Address: this.newServiceAddress,
        City: this.newServicesCity,
        Email: this.newServicesEmail,
      };
      axios
        .post("/api/services", params)
        .then((response) => {
          console.log("services create", response);
          this.$router.push("/services");
        })
        .catch((error) => {
          console.log("services create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>