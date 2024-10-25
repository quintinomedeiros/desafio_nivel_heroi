const prompt = require('prompt-sync')();

let nomeHeroi = prompt("Qual é o nome do heroi?");
let experienciaHeroi = parseInt(prompt("Qual é a experiência do heroi? "));

if (experienciaHeroi <= 1000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e é nível Ferro!`);
} else if (experienciaHeroi > 1000 && experienciaHeroi <= 2000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e é nível Bronze!`);
} else if (experienciaHeroi > 2000 && experienciaHeroi <= 5000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e é nível Prata Ouro!`);
} else if (experienciaHeroi > 5000 && experienciaHeroi <= 8000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e é nível Platina Diamante!`);
} else if (experienciaHeroi > 8000 && experienciaHeroi <= 9000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e é nível Ascendente!`);
} else if (experienciaHeroi > 9000 && experienciaHeroi <= 10000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e é nível Imortal!`);
} else {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e é nível Radiante!`);
}