<template>
    <div class="dpc-sab">
        <br>
        <h2>Sabores:</h2>
        
        <div>
            <ol>
                <li>Chocolate......................${{$store.state.pChocolate}}</li>
                <li>Vainilla..........................${{$store.state.pVainilla}}</li>
                <li>Fresa............................${{$store.state.pFresa}}</li>
                <li>Piñón............................${{$store.state.pPinon}}</li>
                <li>Chocoflan......................${{$store.state.pChocoF}}</li>
                <li>Tres leches....................${{$store.state.pTresL}}</li>
            </ol>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Informacion'
}
</script>

<style scoped>
/* ///////////////// Dimentions, positions and color /////////////// */

.dpc-sab{
    width: 500px;
    height: 250px;
    position: relative;
    text-align: left;
    background-color: aquamarine;
}

</style>