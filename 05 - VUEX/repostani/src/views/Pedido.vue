<template>
    <div class="ordenar">
        <CombinarS/>
        <CombinarA/>
        <Formulario/>
    </div>
</template>

<script>
import Formulario from "../components/Formulario.vue";
import CombinarS from "../components/CombinarS.vue";
import CombinarA from "../components/CombinarA.vue"

export default {
    name: 'Pedido',

    components:{
        Formulario,
        CombinarS,
        CombinarA
    }
}
</script>