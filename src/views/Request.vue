<template>
   <div class="services-new">
     <h1>Request Form</h1>
     <form v-on:submit.prevent="createService()">
       <ul>
         <li v-for="error in errors">{{ error }}</li>
       </ul>
       First Name: <input type="text" v-model="newServiceFName" />
       Last Name: <input type="text" v-model="newServiceLName" />
       Phone Number: <input type="text" v-model="newPhoneNumber" />
       Address: <input type="text" v-model="newServiceAddress" />
       City: <input type="text" v-model="newServiceCity" />
       Zip Code: <input type="text" v-model="newServiceZipCode" />
       Email: <input type="text" v-model="newServiceEmail" />
       <input type="submit" value="Join" />
     </form>
   </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newServiceFName: "",
      newServiceLName: "",
      newServiceName: "",
      newServiceJob: "",
      newServiceAddress: "",
      newServiceCity: "",
      newServicesZipcode: "",
      newServiceEmail: "",
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