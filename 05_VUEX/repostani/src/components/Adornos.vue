<template>
    <div class="dps-ado">
        <h2>
            Diseños:
        </h2>

        <section class="container">
            <div>
                <table>
                    <tr>
                        <th>Tradicional ${{$store.state.pTrad}}</th>
                        <th>Básico ${{$store.state.pBasi}}</th>
                    </tr>
                    <tr>
                        <td><img src="../assets/c_trad.jpg" alt="Pastel tradicional" class="dpc-img"></td>
                        <td><img src="../assets/c_basi.jpg" alt="Pastel basico" class="dpc-img"></td>
                    </tr>
                </table>
            </div>

            <div>
                <table>
                    <tr>
                        <th>Refinado ${{$store.state.pRefi}}</th>
                        <th>Premium ${{$store.state.pPrem}}</th>
                    </tr>
                    <tr>
                        <td><img src="../assets/c_refi.jpg" alt="Pastel refinado" class="dpc-img"></td>
                        <td><img src="../assets/c_prem.jpg" alt="Pastel premium" class="dpc-img"></td>
                    </tr>
                </table>
            </div>
        </section>
        
    </div>
</template>

<script>
export default {
    name: 'Adornos'
}
</script>

<style scoped>
.dps-ado{
    width: 900px;
}
</style>