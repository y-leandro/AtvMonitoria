/* Crie um programa que verifique se uma palavra fornecida é um 
palíndromo. Um palíndromo é uma palavra que se lê da mesma 
forma de trás para frente. O programa deve receber uma palavra 
como entrada e exibir uma mensagem indicando se a palavra é um 
palíndromo ou não.

Dicas:

Utilize um laço de repetição para percorrer a palavra e comparar 
os caracteres.
Utilize uma estrutura de decisão para determinar se a palavra é 
um palíndromo ou não.  
Uma String é um array de caracteres. */


function palindromo(plvr){
    var iniPlvr = plvr.split('');
    let invPlvr = iniPlvr.slice().reverse();
    if(iniPlvr.join('') === invPlvr.join('')){
        return plvr + ' é um palindromo';
    }
    return plvr + ' não é um palindromo';
}

console.log(palindromo('abobora'));