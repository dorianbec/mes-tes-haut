<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 offset-3" id="input">
                <form @submit="submitcity">
                <input type="search" name="city" id="city" v-model="message" placeholder="modifiez-moi">
                <button type="submit" >My weather</button>
                <p>Le message est : {{ message }}</p>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-10 offset-1" id="affich">
                <div id="meteo-semaine">
                         {{ info }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import axios from 'axios'
new Vue({
  el: '#meteo-semaine',
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
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #input {
        height: auto;
        width: 100%;
    }
    button, #city {
        width: 100%;
    }
    form {
        margin: 30px 0px 30px 0px;
    }
    #meteo-semaine {
        height: 60px;
        width: 100%;
        background-color: blueviolet;
    }
</style>