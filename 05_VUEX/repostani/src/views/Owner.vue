<template>
    <div class="owner">
        <PedidosA/>
        <InvSab/>
    </div>
</template>

<script>
import PedidosA from "../components/PedidosA.vue"
import InvSab from "../components/InvSab.vue"

export default {
    name: 'Owner',

    components: {
        PedidosA,
        InvSab
    }
}
</script>