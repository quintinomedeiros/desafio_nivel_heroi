const prompt = require('prompt-sync')();

let nomeHeroi = prompt("Qual é o nome do heroi?");
let experienciaHeroi = parseInt(prompt("Qual é a experiência do heroi? "));

if (experienciaHeroi <= 1000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e está no nível Ferro!`);
} else if (experienciaHeroi > 1000 && experienciaHeroi <= 2000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e está no nível Bronze!`);
} else if (experienciaHeroi > 2000 && experienciaHeroi <= 5000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e está no nível Prata!`);
} else if (experienciaHeroi > 5000 && experienciaHeroi <= 7000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e está no nível Ouro!`);
} else if (experienciaHeroi > 7000 && experienciaHeroi <= 8000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e está no nível Platina!`);
} else if (experienciaHeroi > 8000 && experienciaHeroi <= 9000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e está no nível Ascendente!`);
} else if (experienciaHeroi > 9000 && experienciaHeroi <= 10000) {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e está no nível Imortal!`);
} else {
    console.log(`O heroi ${nomeHeroi} tem xp de ${experienciaHeroi} e está no nível Radiante!`);
}