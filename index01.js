// 1. Variáveis 
let nome = "Poseidon";
let xp = 3800;
let nivel = "";
const mensagemFinal = "O herói do nome ";

// 2. Estrutura de decisao 
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Importal";
} else {
    nivel = "Radiante";
}

// 3. Saída 
console.log(mensagemFinal + nome + " está no nível " + nivel);
