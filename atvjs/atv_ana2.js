/*  Crie um programa que conte o número de palavras em uma 
    frase ou texto fornecido. O programa deve receber o texto
    como uma string e retornar o número de palavras presentes
    nele. Utilize laços de repetição e decisão para percorrer
    a string e contar as palavras.

Dicas:

Use o método split() para dividir a string em palavras.
 O split() retorna um array de palavras.
Utilize a propriedade length do array para obter o número de palavras.  */


function contaPlvr(texto) {
    let plvr = texto.trim().split(/\s+/);
    return plvr.length;
}

const text = ("um dois tres quatro");
const numPlvr = contaPlvr(text);
console.log(numPlvr);

