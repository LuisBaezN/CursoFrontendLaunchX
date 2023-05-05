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

    pedi: null,

    choco: 24.0,
    vaini: 10.0,
    fresa: 7.0,
    pinon: 27.0,
    leche: 55.0,
    huevo: 77,
    harin: 47.0,
    azuca: 61.0  
  },
  getters: {
    retChoco (state) {
      return state.choco
    },
    retVaini (state) {
      return state.vaini
    },
    retFresa (state) {
      return state.fresa
    },
    retPinon (state) {
      return state.pinon
    },
    retLeche (state) {
      return state.leche
    },
    retHuevo (state) {
      return state.huevo
    },
    retHarin (state) {
      return state.harin
    },
    retAzuca (state) {
      return state.azuca
    }
  },
  mutations: {
    setSabor(state){
      state.sabores = [state.sabor, ... state.sabores];
    },
    setPedido(state) {
      let sg = state.sabores;
      let ord = `${state.nombre} ${state.apellido}, ${state.numero}, ${state.correo}
      Sabor(es): ${sg} Diseño: ${state.dise} Serie: ${state.serie} Detalles: ${state.detalles}-`;
      if (localStorage.getItem("pedidos") == null){localStorage.setItem("pedidos", "");}
      let prevC = localStorage.getItem("pedidos");
      prevC += ord;
      localStorage.setItem("pedidos", prevC);

      for (let i = 0; i<sg.length; i++) {
        switch (sg[i]) {
          case 'chocolate':
            state.choco -= 0.5;
            state.leche -= 1.7;
            state.huevo -= 4;
            state.harin -= 1.2;
            state.azuca -= 0.7;
            break;
          case 'vainilla':
            state.vaini -= 0.2;
            state.leche -= 1.7;
            state.huevo -= 4;
            state.harin -= 1.2;
            state.azuca -= 0.7;
            break;
          case 'fresa':
            state.fresa -= 0.2;
            state.leche -= 1.7;
            state.huevo -= 4;
            state.harin -= 1.2;
            state.azuca -= 0.7;
            break;
          case 'piñón':
            state.pinon -= 0.07;
            state.leche -= 1.7;
            state.huevo -= 4;
            state.harin -= 1.2;
            state.azuca -= 0.7;
            break;
          case 'chocoflan':
            state.choco -= 0.25;
            state.vaini -= 0.01;
            state.leche -= 1.7;
            state.huevo -= 4;
            state.harin -= 1.2;
            state.azuca -= 0.7;
            break;
          case 'tres leches':
            state.leche -= 1.7;
            state.huevo -= 4;
            state.harin -= 1.2;
            state.azuca -= 0.7;
            break;
        }
      }
      console.log(state.azuca -= 0.7)

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
