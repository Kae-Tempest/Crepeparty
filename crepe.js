    function MakeCrepe() {
    let nbpersonne = document.getElementById('nbpersonne').value;
    if (nbpersonne === '') {nbpersonne = 1}

    const divFarine = document.getElementById('farine');
    const divOeuf = document.getElementById('oeuf');
    const divLait = document.getElementById('lait');
    const divSucre = document.getElementById('sucre');
    const divBeurre = document.getElementById('beurre');
    const divHuile = document.getElementById('huile');

    const farine = 200 * nbpersonne;
    const oeuf = 2 * nbpersonne;
    const lait = 0.4 * nbpersonne;
    const sucre = 2 * nbpersonne;
    const beurre = 33.5 * nbpersonne;
    const huile = 1.5 * nbpersonne;

    divFarine.innerText = `Farine: ${farine}g`;
    divOeuf.innerText = `Oeuf: ${oeuf}`;
    divLait.innerText = `Lait: ${lait.toFixed(2)}L`;
    divSucre.innerText = `Sucre: ${sucre} c à s`;
    divBeurre.innerText = `Beurre: ${beurre}g`;
    divHuile.innerText = `Huile: ${huile} c à s`;

    makeCourse(farine, oeuf, lait, sucre, beurre, huile)
}

function makeCourse(farine, oeuf, lait, sucre, beurre, huile){
    const divCourse = document.getElementById('courses')
    let nbFarine = farine % 1000 === 0 ? farine / 1000 : Math.ceil(farine / 1000)
    let nbOeuf = oeuf % 6 === 0 ? oeuf/6 : Math.ceil(oeuf/6)
    let nbLait = (lait % 1) / 100 === 0 ? lait / 1 : Math.ceil(lait / 1 )
    let nbBeurre = beurre % 1000 === 0 ? beurre / 1000 : Math.ceil((beurre / 1000))
    let nbHuile = (huile * 1.5) / 100 % 1 === 0 ? (huile * 1.5) / 100 : Math.ceil((huile * 1.5) / 100 )
    let nbSucre = sucre * 15 % 1000 === 0 ? (sucre * 15) / 1000 : Math.ceil((sucre * 15) / 1000 )
    let ListeDeCourses = {
        farine: nbFarine,
        oeuf: nbOeuf,
        lait: nbLait,
        beurre: nbBeurre,
        sucre: nbSucre,
        huile: nbHuile
    }
    let ListCourse = []
    ListCourse.push(`Il faudra ${ListeDeCourses.farine} paquets de farine`)
    ListCourse.push(`Il faudra ${ListeDeCourses.oeuf} paquets d'oeufs`)
    ListCourse.push(`Il faudra ${ListeDeCourses.lait} brique de lait`)
    ListCourse.push(`Il faudra ${ListeDeCourses.sucre} paquet de sucre`)
    ListCourse.push(`Il faudra ${ListeDeCourses.beurre} mottes de beurre d'1Kg`)
    ListCourse.push(`Il faudra ${ListeDeCourses.huile} bouteille d'huile`)

    for(let i = 0; ListCourse.length > i; i++){
        divCourse.querySelector(`div:nth-child(${i + 1})`).innerHTML = ListCourse[i]
    }
}
