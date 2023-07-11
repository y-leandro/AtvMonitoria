# Atividade :D <img src="https://media3.giphy.com/media/yt0Z5nBGZFSjZL8EzO/giphy.gif?cid=ecf05e47fl5u4ix4u88xuhj8rnhsfjnuhps7zy4jx6i5oyrn&ep=v1_stickers_search&rid=giphy.gif&ct=s" width="35">

1. Crie um programa que gere uma sequência de números aleatórios e exiba-os no console. A função deve permitir que seja definido o tamanho da sequência e o intervalo de números a serem gerados.


```js

```
##
2. Crie um programa que conte o número de palavras em uma frase ou texto fornecido. O programa deve receber o texto como uma string e retornar o número de palavras presentes nele. Utilize laços de repetição e decisão para percorrer a string e contar as palavras.

```js
function contaPlvr(texto) {
    let plvr = texto.trim().split(/\s+/);
    return plvr.length;
}

const text = ("um dois tres quatro");
const numPlvr = contaPlvr(text);
console.log(numPlvr);
```
##
3. Crie um programa que verifique se um número fornecido é primo. A função deve receber um número inteiro como entrada e exibir uma mensagem indicando se o número é primo ou não.

```js
function verifPrimo(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return num !== 1
}

console.log(verifPrimo(27));
```
##
4. Crie um programa que verifique se uma palavra fornecida é um palíndromo. Um palíndromo é uma palavra que se lê da mesma forma de trás para frente. O programa deve receber uma palavra como entrada e exibir uma mensagem indicando se a palavra é um palíndromo ou não.

```js
function palindromo(plvr){
    var iniPlvr = plvr.split('');
    let invPlvr = iniPlvr.slice().reverse();
    if(iniPlvr.join('') === invPlvr.join('')){
        return plvr + ' é um palindromo';
    }
    return plvr + ' não é um palindromo';
}

console.log(palindromo('abobora'));
```
##
5. Crie um programa que receba uma lista de números e retorne a lista ordenada em ordem crescente. O programa deve receber a lista como um array de números e retornar um novo array com os números ordenados.

```js
function ordenarNumeros(lista) {
    lista.sort((a, b) => a - b);
    return lista;
  }
  
  var num = [2, 9, 3, 10, 1, 12];
  console.log(ordenarNumeros(num));
```
##
6. Crie o jogo da forca usando JavaScript. Entregue também o arquivo HTML e CSS para a visualização do usuário.

> [Link para jogar :)](https://y-leandro.github.io/AtvMonitoria/atvforca/forca2/)
