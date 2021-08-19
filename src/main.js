import data from './data/athletes/athletes.js';
import { filterByTeam, filterByMedal, filterBySport, sorter } from './data.js';
const datos = data.athletes;
const selectByTeam = document.getElementById("countries");
const selectByMedal = document.getElementById("medalSelect");
const selectBySport = document.getElementById("sport");
const selectOrder = document.getElementById("sort");
//Muestra la data en pantalla
function mostrarData(data) {
    let allcards = ""
    data.forEach((athlete) => {
        allcards += `<div class="card contentcard">
        <p class="cardName"><strong>${athlete.name.toUpperCase()}</strong></p>
        <img class="icon" src="./${athlete.medal}.png">
        <p>${athlete.medal}</p>
        <p>${athlete.team} ${athlete.noc}</p>
        <p>${athlete.event}</p>
        </div>`
    });
    document.getElementById("root").innerHTML = allcards;
}
mostrarData(datos);
//Muestra filtro por team
selectByTeam.addEventListener("change", function (e) {
    const allData = (filterByTeam(datos, e.target.value));
    mostrarData(allData);
});

//Muestra filtro por medalla
selectByMedal.addEventListener("change", function (e) {
    const allData = (filterByMedal(datos, e.target.value))
    mostrarData(allData);
});

//Mostrar tarjetas por deporte elegido
selectBySport.addEventListener("change", function (e) {
    const allData = (filterBySport(datos, e.target.value))
    mostrarData(allData);
});

//Selector para ordenar de A-Z y de Z-A
selectOrder.addEventListener("change", function (e) {
    const allData = (sorter(datos, e.target.value))
    mostrarData(allData);
    });