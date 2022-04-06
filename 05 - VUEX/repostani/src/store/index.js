import { createStore, Store } from 'vuex'

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
    correo: null,

    pedi: null
  },
  getters: {
  },
  mutations: {
    setSabor(state){
      state.sabores = [state.sabor, ... state.sabores];
    },
    setPedido(state) {
      let ord = `${state.nombre} ${state.apellido}, ${state.numero}, ${state.correo}
      Sabor(es): ${state.sabores} Diseño: ${state.dise} Serie: ${state.serie} Detalles: ${state.detalles}-`;
      if (localStorage.getItem("pedidos") == null){
        localStorage.setItem("pedidos", "");
      }
      let prevC = localStorage.getItem("pedidos");
      prevC += ord;
      console.log(prevC);
      localStorage.setItem("pedidos", prevC);
      state.sabores = [];
    },
    getTableAct(){
      let ped = localStorage.getItem('pedidos');
      let sec = document.getElementById("TB");
      let cont = 1;
      let carry = 0;
      for (let i = 0; i < ped.length; i++){
        if (ped[i] == '-'){
          sec.innerHTML += `<option>${cont}: ` + ped.slice(carry, i) + "</option>";
          cont++;
          carry = i + 1;
        }
      }      
    },
    borPed( state ) {
      let ind = state.pedi;
      let ped = localStorage.getItem('pedidos');
      let cont = 1;
      let carry = 0;
      let lh = '';
      let rh = '';
      for (let i = 0; i < ped.length; i++){
        if (ped[i] == '-'){
          if (cont == ind){
            lh = ped.slice(0, carry);
            rh = ped.slice(i);
            console.log(rh)
            if (rh[0] == '-' && cont == 1) {rh = ped.slice(i+1);}

            localStorage.setItem('pedidos', lh + rh);
            break;
          }
          cont++;
          carry = i;
        }
      }
    }
  },
  actions: {
    addSabor( contex ) {
      contex.commit('setSabor');
    },
    addPedido( contex) {
      contex.commit('setPedido');
    },
    getTable( contex ) {
      contex.commit('getTableAct');
    },
    quitPed( contex ) {
      contex.commit('borPed')
    }
  },
  modules: {
  }
})
