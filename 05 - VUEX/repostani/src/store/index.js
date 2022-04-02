import { createStore } from 'vuex'

export default createStore({
  state: {
    pChocolate: '30.00',
    pVainilla: '28.00',
    pFresa: '35.00',
    pPinon: '40.00',
    pChocoF: '37.00',
    pTresL: '32.00',
    pTrad: '50.00',
    pBasi: '100.00',
    pRefi: '150.00',
    pPrem: '300.00',

    sabores: [],
    sabor : null,
    dise: null,
    serie: null,
    detalles: null,
    nombre: null,
    apellido: null,
    numero: null,
    correo: null
  },
  getters: {
  },
  mutations: {
    setSabor(state){
      state.sabores = [state.sabor, ... state.sabores];
    },
    setPedido(state) {
      let ord = `["${state.nombre}","${state.apellido}","${state.numero}","${state.correo}",
        "${state.sabores}","${state.dise}","${state.serie}","${state.detalles}"]`;
      if (localStorage.getItem("pedidos") == null){
        localStorage.setItem("pedidos", "");
      }
      let prevC = localStorage.getItem("pedidos");
      prevC += ord;
      console.log(prevC);
      localStorage.setItem("pedidos", prevC);
      state.sabores = [];
    }
  },
  actions: {
    addSabor( contex ) {
      contex.commit('setSabor');
    },
    addPedido( contex) {
      contex.commit('setPedido');
    }
  },
  modules: {
  }
})
