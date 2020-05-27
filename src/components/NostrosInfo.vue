<template>
  <div>
      <button @click="info">Clic</button>
      <ul>
          <li v-for="(item, index) in datos" :key="index">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'NosotrosInfo',
    data() {
        return {
            datos: null
        }
    },
    methods: {
        info(){
            fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.datos = json;
            })
            .catch(error => console.error(error))
        }
    },
}
</script>

<style>

</style>