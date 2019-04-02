<template>
    <header class="header">
      {{ info }}
    </header>
</template>

<script>
import json from '/home/user/movie-list/src/movie.json'
import axios from 'axios'

export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}
</script>

<style scoped>

</style>
