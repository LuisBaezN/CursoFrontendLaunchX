<template>
  <div class="home">
    <div><h1>Repostani</h1></div>
    <img alt="Logo de la pasteleria" src="../assets/logo-p.png">
    <section class="container">
      <Sabores/>
      <Adornos/>
    </section>
    
  </div>
</template>

<script>
import Sabores from "../components/Sabores.vue";
import Adornos from "../components/Adornos.vue";

export default {

  name: 'HomeView',

  components:{
    Sabores,
    Adornos
  }
}
</script>
