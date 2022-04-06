<template>
    <div>
        <button @click="actualizar">Actualizar pedidos</button>
        <br>
        <div id="tabla">
            <select name="TableOrder" id="TB" size="5"></select>
        </div>

        <form>
            <label>Pedido terminado: </label>
            <input type="number" maxlength="2" v-model="pedi" required>
            <button @click="borrarpedido">Quitar</button>
        </form>

        <br>

        <button @click="limpiarp">Limpar pedidos</button>
        
    </div>
</template>
<script>
export default {
    name: 'PedidosA',
    data() {
        return {
            pedi: ''
        }
    },
    methods: {
        actualizar(){
            let block = document.getElementById("tabla");
            let tab = document.getElementById("TB");
            tab.remove();
            block.innerHTML = '<select name="TableOrder" id="TB" size="5"></select>';

            this.$store.dispatch('getTable');
        },
        borrarpedido(){
            this.$store.state.pedi = this.pedi;
            this.$store.dispatch('quitPed');
            this.actualizar();
        },
        limpiarp() {
            localStorage.removeItem("pedidos");
        }
    }
}
</script>