<template>
  <div class="logout">
  </div>
</template>

<style>
.logout {
  margin: auto;
  padding: 3%;
  max-width: 400px;
  background-color: #f2f2f2;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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