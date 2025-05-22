let nivel = "";
let saldoVitorias = calcularNivel (158, 36);

function calcularNivel(numVitorias, numDerrotas){
    let somatorio = numVitorias - numDerrotas;
   

    if (somatorio <= 10){
    nivel = "Ferro";
    } else if (somatorio <= 20){
    nivel = "Bronze";
    } else if (somatorio <= 50){
    nivel = "Prata";
    }else if (somatorio <= 80){
    nivel = "Ouro";
    } else if (somatorio <= 90){
    nivel = "Diamante";
    } else if (somatorio <= 100){
    nivel = "Lendário"; 
    } else {
    nivel = "Imortal";
    }
 
    return somatorio 
}


console.log("O Herói tem saldo de " + saldoVitorias +  " e está no nível " + nivel); 