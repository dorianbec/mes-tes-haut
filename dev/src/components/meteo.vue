<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 offset-3" id="input">
                <form action="">
                <input type="search" name="city" id="city">
                <button onclick="citymeteo()">My weather</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-10 offset-1" id="affich">
                <div id="meteo-semaine">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'meteo',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #input {
        height: auto;
        width: 100%;
        background-color: aqua;
    }
    button, #city {
        width: 100%;
    }
    form {
        margin: 30px 0px 30px 0px;
    }
    #affich {
        height: 60px;
        width: 100%;    
        background-color: blueviolet;
    }
</style>