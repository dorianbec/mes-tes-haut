<template>
  <div id="app">
    <titre/>
    <meteo/>
  </div>
</template>

<script>
import meteo from './components/meteo.vue'
import titre from './components/titre.vue'

export default {
  name: 'app',
  components: {
    titre,
    meteo,
  }
}
</script>

<style>

</style>
