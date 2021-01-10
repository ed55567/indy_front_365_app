<template>
   <div class="services-new">
     <h1>Request Forum</h1>
     <form v-on:submit.prevent="createRequest()">
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
        <div class="input-field col s12">
          <i class="material-icons prefix">email</i>
          <input placeholder="Email" id="icon_prefix" type="text" v-model="newServiceEmail" class="validate">
          <label for="icon_prefix"></label>
        </div>
         <div class="input-field col s6">
          <i class="material-icons prefix">local_phone</i>
          <input placeholder="Phone Number" id="icon_prefix" type="text" v-model="newServicePhone" class="validate">
          <label for="icon_prefix"></label>
        </div>
         <div class="input-field col s6">
          <i class="material-icons prefix">business</i>
          <input placeholder="Address" id="icon_prefix" type="text" v-model="newServiceAddress" class="validate">
          <label for="icon_prefix"></label>
        </div>
         <div class="input-field col s6">
          <i class="material-icons prefix">location_city</i>
          <input placeholder="City" id="icon_prefix" type="text" v-model="newServiceCity" class="validate">
          <label for="icon_prefix"></label>
        </div>
         <div class="input-field col s6">
          <i class="material-icons prefix">streetview</i>
          <input placeholder="Zip Code" id="icon_prefix" type="text" v-model="newServiceZipCode" class="validate">
          <label for="icon_prefix"></label>
        </div>
         <div class="input-field col s12">
          <i class="material-icons prefix">work</i>
          <input placeholder="Service Type" id="icon_prefix" type="text" v-model="newServicesType" class="validate">
          <label for="icon_prefix"></label>
         </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">description</i>
          <input placeholder="Service Description Need" id="icon_prefix" type="text" v-model="newServiceDescription">
            <textarea id="textarea2" class="materialize-textarea  validate"  data-length="120"></textarea>
          </div>
      </div>
      <input type="submit" id="buttonlarge" class="waves-effect waves-light btn-large" value="requests" />
    </form>
   </div>
  </div>
</template>

<style>
.services_new {
  margin: auto;
  top: 40px;
  padding: 3%;
}

#buttonlarge {
  top: -20px;
  right: 3px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newServiceFName: "Tommy",
      newServiceLName: "Gunn",
      newServiceEmail: "tedgun@gmail.com",
      newServicePhone: "587-987-9998",
      newServiceAddress: "228 blue lane",
      newServiceCity: "indianapolis",
      newServiceZipCode: "97874",
      newServicesType: "adult education",
      newServiceDescription: "my house",
      errors: [],
    };
  },

  created: function () {},
  methods: {
    createRequest: function () {
      var params = {
        fname: this.newServiceFName,
        lname: this.newServiceLName,
        email: this.newServiceEmail,
        phone: this.newServicePhone,
        address: this.newServiceAddress,
        city: this.newServiceCity,
        zipcode: this.newServiceZipCode,
        servicetype: this.newServicesType,
        description: this.newServiceDescription,
      };

      axios
        .post("/api/requests", params)
        .then((response) => {
          console.log("requests create", response);
          this.$router.push("/requests");
        })
        .catch((error) => {
          console.log("requests create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>