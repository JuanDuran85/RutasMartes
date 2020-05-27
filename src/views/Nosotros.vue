<template>
  <div>
    <h1 v-text="titulo"></h1>
    <button @click="$router.go(-1)">Regresar</button>
    <hr>
    <nosotros-info></nosotros-info>
  </div>
</template>

<script>
import NosotrosInfo from '../components/NostrosInfo.vue';

export default {
    name: 'Nosotros',
    data() {
        return {
            titulo: 'Página Nosotros'
        }
    },
    components: { NosotrosInfo }
}
</script>

<style>

</style>