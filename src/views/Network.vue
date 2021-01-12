<template>
   <div class="services-new">
     <h1>Join The System</h1>
       <ul>
         <li v-for="error in errors">{{ error }}</li>
       </ul>
  
       <div class="row">
    <form  v-on:submit.prevent="createService()" class="col s12">
      <div class="row">

        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input placeholder="Provider Name" id="icon_prefix" type="text" v-model="newServiceName" class="validate">
          <label for="icon_prefix"></label>
        </div>

        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input placeholder="Service Type" id="icon_telephone" type="tel" v-model="newServiceType" class="validate">
          <label for="icon_telephone"></label>
        </div>

         <div class="input-field col s6">
          <i class="material-icons prefix">business</i>
          <input placeholder="Address" id="icon_prefix" type="text" v-model="newServiceAddress" class="validate">
          <label for="icon_prefix"></label>
        </div>

         <div class="input-field col s6">
          <i class="material-icons prefix">business</i>
          <input placeholder="City" id="icon_prefix" type="text" v-model="newServiceCity" class="validate">
          <label for="icon_prefix"></label>
        </div>

         <div class="input-field col s6">
          <i class="material-icons prefix">business_center</i>
          <input placeholder="Zip Code" id="icon_prefix" type="text" v-model="newServicesZipCode" class="validate">
          <label for="icon_prefix"></label>
        </div>

         <div class="input-field col s6">
          <i class="material-icons prefix">location_city</i>
          <input placeholder="Phone" id="icon_prefix" type="text" v-model="newServicesPhone" class="validate">
          <label for="icon_prefix"></label>
        </div>

         <div class="input-field col s12">
          <i class="material-icons prefix">web</i>
          <input placeholder="Website" id="icon_prefix" type="text" v-model="newServicesWebsite" class="validate">
          <label for="icon_prefix"></label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input placeholder="Email" id="icon_prefix" type="text" v-model="newServicesEmail" class="validate">
          <label for="icon_prefix"></label>
        </div>

        <div class="input-field col s12">
          <i class="material-icons prefix">description</i>
          <input placeholder="Description" id="icon_prefix" type="text" v-model="newServicesDescription" class="validate">
          <label for="icon_prefix"></label>
        </div>
      </div>

      <input type="submit"  class="waves-effect waves-light btn-large btn_0" value="Join" /> 
    </form>
   </div>
  </div>
</template>

<style>
.services-new {
  margin: auto;
  padding: 3%;
}

.btn_0 {
  margin: auto;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newServiceName: "",
      newServiceType: "",
      newServiceAddress: "",
      newServiceCity: "",
      newServicesZipCode: "",
      newServicesPhone: "",
      newServicesWebsite: "",
      newServicesEmail: "",
      newServicesDescription: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createService: function () {
      var params = {
        name: this.newServiceName,
        servicetype: this.newServiceType,
        address: this.newServiceAddress,
        city: this.newServiceCity,
        zipcode: this.newServicesZipCode,
        county: this.newServicesCounty,
        phone: this.newServicesPhone,
        website: this.newServicesWebsite,
        email: this.newServicesEmail,
        description: this.newServicesDescription,
      };
      axios
        .post("/api/services", params)
        .then((response) => {
          console.log("services create", response);
          this.$router.push("/logout");
        })
        .catch((error) => {
          console.log("services create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>