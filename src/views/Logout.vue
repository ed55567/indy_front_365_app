<template>
  <div class="logout">
  </div>
</template>

<style>
.logout {
  margin: auto;
  padding: 3%;
}
</style>

<script>
import axios from "axios";

export default {
  created: function () {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/");
  },
};
</script>