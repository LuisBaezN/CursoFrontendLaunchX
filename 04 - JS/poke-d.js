console.log('Bienvenido!')

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("nom");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/missigno_a.png")
            pNumero('000')
            pNombre('MissingNo')
            types("normal", "???")
            let mab = ['---','---','---','---','---','---'];
            console.log(mab[0])
            estad(mab);
            reset_block();
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            let pN = data.id;
            pNumero(pN);

            let pNom = data.name;
            pNombre(pNom);

            let gType = data.types;
            if (gType.length == 2){
                let Type1 = gType[0];
                let t1 = Type1.type.name;

                let Type2 = gType[1];
                let t2 = Type2.type.name;

                types(t1, t2);
            }
            else{
                let Type1 = gType[0];
                let t1 = Type1.type.name;

                types(t1, "");
            }

            let stats = data.stats;

            estad(stats)

            reset_block();

            let moves = data.moves;

            i = 0;
            stat = 0;
            st = "";

            for (i; i < moves.length; i++){
                stat = moves[i];
                st = stat.move.name;
                abilitys(st)
            }
            
        }
    });
}

const estad = (statv) => {
    let i = 0;
    let stat = 0;
    let st = "";
    for (i; i < statv.length; i++){
        stat = statv[i];
        if (stat == '---'){
            astats(stat, i);
        }
        else{
            st = stat.base_stat;
            astats(st, i);
        }
    }
}

const reset_block = () => {
    let a_list = document.getElementById("abilitys");
    let a_block = document.getElementById("abilitys-block")
    a_list.remove();
    a_block.innerHTML = '<select name="habilidades" id="abilitys" size="4" style="width: 200px;"></select>'
}

const abilitys = (ab) => {
    const abi_place = document.getElementById("abilitys");
    abi_place.innerHTML += "<option>" + ab + "</option>";
}

const astats = (s, i) => {
    const stat = document.getElementById(`estad${i}`)
    stat.innerHTML = s
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("img");
    pokePhoto.src = url;
}

const pNumero = (pn) => {
    const pNum = document.getElementById("n");
    pNum.innerHTML = pn;
}

const pNombre = (pnom) => {
    const pNombre = document.getElementById("pnom");
    pNombre.innerHTML = pnom;
}

const types = (t1, t2) => {
    const pType1 = document.getElementById("t1");
    const pType2 = document.getElementById("t2");

    pType1.innerHTML = t1
    pType2.innerHTML = t2
}