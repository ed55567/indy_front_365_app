<template>
  <div id="app">
    <div id="nav" class="nav-wrapper">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      |
       <router-link to="/Services">All Services</router-link>
       |
       <router-link to="/Request">Request Needs</router-link>
       |  
        <router-link to="/Login">Login</router-link>
         <!-- |  
        <router-link to="/Services_address">Address</router-link> -->
       <!-- |
        <router-link to="/logout">Logout</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 22px;
}

#nav a.router-link-exact-active {
  color: #d59f0f;
}
</style>
