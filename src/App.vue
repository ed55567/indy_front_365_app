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
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #ccc;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 18px;
  text-decoration: none;
  margin-right: 10px;
  transition: color 0.3s ease;
}

#nav a:hover {
  color: #d59f0f;
}

#nav a.router-link-exact-active {
  color: #d59f0f;
}
</style>
