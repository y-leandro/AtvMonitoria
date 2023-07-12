/*
Crie um programa que gere uma sequência de números aleatórios e 
exiba-os no console. A função deve permitir que seja definido o 
tamanho da sequência e o intervalo de números a serem gerados.

Dicas:
Use a função Math.random() para gerar números aleatórios entre 0 e 1.
Utilize a função Math.floor() para arredondar os números para baixo. 
*/

function randomNumber(numSeq, numMin, numMax) {
    for (let i = 0; i < numSeq; i++){
        let n = Math.floor(Math.random()* (numMax - numMin) + numMin);
        console.log(n);
    }
}

randomNumber(5, 7, 10)