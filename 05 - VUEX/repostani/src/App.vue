<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/ordenar">Ordenar</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body{
  margin: 0%;
  padding: 0%;
}

ol{
  list-style-position: inside;
}

img{
  width: 250px;
  height: 250px;
}

/* ///////////////// Dimentions, positions and color /////////////// */

.dpc-img{
    width: 150px;
    height: 150px;
}

/* //////////////////////////// Containers ///////////////////////// */

.container{
  width: 100%;
  height: 180px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
