<template>
    <div>
        <h2>Inventario</h2>
        <table>
            <tr>
                <td>Chocolate: </td>
                <td> {{choco}} </td>
            </tr>
            <tr>
                <td>Vainilla: </td>
                <td>{{vaini}}</td>
            </tr>
            <tr>
                <td>Fresa: </td>
                <td>{{fresa}}</td>
            </tr>
            <tr>
                <td>Piñón: </td>
                <td>{{pinon}}</td>
            </tr>
            <tr>
                <td>Leche: </td>
                <td>{{leche}}</td>
            </tr>
            <tr>
                <td>Huevo: </td>
                <td>{{huevo}}</td>
            </tr>
            <tr>
                <td>Harina: </td>
                <td>{{harina}}</td>
            </tr>
            <tr>
                <td>Azucar: </td>
                <td>{{azucar}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'InvSab',

    computed: {
        choco () {
            return this.$store.getters.retChoco
        },
        vaini () {
            return this.$store.getters.retVaini
        },
        fresa () {
            return this.$store.getters.retFresa
        },
        pinon () {
            return this.$store.getters.retPinon
        },
        leche () {
            return this.$store.getters.retLeche
        },
        huevo () {
            return this.$store.getters.retHuevo
        },
        harina () {
            return this.$store.getters.retHarin
        },
        azucar () {
            return this.$store.getters.retAzuca
        }
    }
}
</script>