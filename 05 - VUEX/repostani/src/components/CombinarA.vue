<template>
    <div>
        <form>
            <label>Diseño: </label>

            <select v-model="dise" required>
                <option value="trad">Tradicional</option>
                <option value="basi">Básico</option>
                <option value="refi">Refinado</option>
                <option value="prem">Premium</option>
            </select>

            <label>Serie: </label>
            <input type="text" placeholder="Evangelion" required v-model="serie">

            <label>Detalles extra: </label>
            <input type="text" v-model="detalles">

            <br>

            <button @click="submitForm">Apartar</button>
        </form>
    </div>
</template>

<script>
export default {
    
    name: 'CombinarA',

    data() {
        return {
            dise: '',
            serie: '',
            detalles: ''
        }
    },
    methods: {
        submitForm() {
            this.$store.state.dise = this.dise;
            this.$store.state.serie = this.serie;
            this.$store.state.detalles = this.detalles;
        }
    }
}
</script>