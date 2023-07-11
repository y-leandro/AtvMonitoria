/* Crie um programa que verifique se um número fornecido é primo. A 
função deve receber um número inteiro como entrada e exibir uma 
mensagem indicando se o número é primo ou não.

Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.  

Dicas:

Utilize um laço de repetição para verificar se o número é divisível por
algum outro número menor que ele.
Utilize uma estrutura de decisão para determinar se o número é primo ou não. */


function verifPrimo(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return num !== 1
}

console.log(verifPrimo(27));