<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{name: 'Nosotros'}">Nosotros</router-link> |
      <router-link to="/persona/juan">Persona</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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
}

#nav a.router-link-exact-active,  #nav a.router-link-active{
  color: #42b983;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
