<template>
  <div>
      <p>Parametro: {{$route.params.name}}</p>
      <p>Ruta: {{$route.path}}</p>
      <router-link to="/perfil">Perfil</router-link>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {

}
</script>