<template>
    <div>

        <h2>Datos personales</h2>

        <form>

            <label>Nombre:</label>
            <input type="text" placeholder="José Juan" required v-model="nombre">
            
            <label>Apellido: </label>
            <input type="text" placeholder="González Cabrera" required v-model="apellido">
            
            <label>Teléfono: </label>
            <input type="tel" maxlength="10" placeholder="123-222-7777" required v-model="numero">
            
            <label>Correo: </label>
            <input type="email" placeholder="juan_otaku@ejemplo.mx" required v-model="correo">

            <br>
            <button @click="submitForm">Ordenar</button>
        </form>

        <button @click="limpiarp">Limpar pedidos</button>


        <!--
        <ul>
            <li 
                v-for="(sabor, i) in $store.state.sabores"
                :key="i">
                {{ sabor }}
            </li>
        </ul>

        <p>Diseño: {{ $store.state.dise }}</p>
        <p>Serie: {{ $store.state.serie }}</p>
        <p>Detalles: {{ $store.state.detalles }} </p>
        <p>Nombre: {{$store.state.nombre}}</p>
        <p>Apellido: {{$store.state.apellido}}</p>
        <p>Número: {{$store.state.numero}}</p>
        <p>correo: {{$store.state.correo}}</p>
        -->
        
    </div>
</template>

<script>
export default {

    name: 'Formulario',

    data() {
        return {
            nombre: '',
            apellido: '',
            numero: '',
            correo: ''
        }
    },
    methods: {
        submitForm() {
            this.$store.state.nombre = this.nombre;
            this.$store.state.apellido = this.apellido;
            this.$store.state.numero = this.numero;
            this.$store.state.correo = this.correo;

            this.$store.dispatch('addPedido');
        },
        limpiarp() {
            localStorage.removeItem("pedidos");
        }
    }  
}
</script>