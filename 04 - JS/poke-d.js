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
            
            let i = 0;
            let stat = 0;
            let st = "";
            for (i; i < stats.length; i = i +1){
                stat = stats[i];
                st = stat.base_stat;
                console.log("Antes de la función \ni: "+i+"\nstat: "+st);
                astats(st, i);
                console.log("Aespués de la función")
            }
        }
    });
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