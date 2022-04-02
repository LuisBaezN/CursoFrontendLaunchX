<template>
    <div>

        <h2>Tu pastel</h2>
        
        <form>
            <label>Sabor(es): </label> 

            <div>
                <input type="checkbox" value="chocolate" v-model="sabor0">
                <label>Chocolate</label>
            </div>
            <div>
                <input type="checkbox" value="vainilla" v-model="sabor1">
                <label>Vainilla</label>
            </div>
            <div>
                <input type="checkbox" value="fresa" v-model="sabor2">
                <label>Fresa</label>
            </div>
            <div>
                <input type="checkbox" value="pinon" v-model="sabor3">
                <label>Piñón</label>
            </div>
            <div>
                <input type="checkbox" value="chocoflan" v-model="sabor4">
                <label>Chocoflan</label>
            </div>
            <div>
                <input type="checkbox" value="tres-leches" v-model="sabor5">
                <label>Tres leches</label>
            </div>

            <button @click="submitForm">Apartar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CombinarS',

    data() {
        return {
            sabor0: '',
            sabor1: '',
            sabor2: '',
            sabor3: '',
            sabor4: '',
            sabor5: '',
            sabor: ''
        }
    },
    methods: {
        addSabor(sab) {
            this.$store.state.sabor = sab;
            this.$store.dispatch('addSabor');
        },
        submitForm() {
            if(this.sabor0 == true){this.addSabor('chocolate')};
            if(this.sabor1 == true){this.addSabor('vainilla')};
            if(this.sabor2 == true){this.addSabor('fresa')};
            if(this.sabor3 == true){this.addSabor('piñón')};
            if(this.sabor4 == true){this.addSabor('chocoflan')}  ;  
            if(this.sabor5 == true){this.addSabor('tres leches')};   
        }
    }
}
</script>