/*Crie um programa que receba uma lista de números e retorne 
a lista ordenada em ordem crescente. O programa deve receber 
a lista como um array de números e retornar um novo array 
com os números ordenados.

Dicas:
Utilize um laço de repetição para percorrer os elementos do array.
Utilize uma estrutura de decisão para comparar os números e realizar 
as trocas necessárias.
Repita esse processo até que a lista esteja totalmente ordenada.*/


function ordenarNumeros(lista) {
    lista.sort((a, b) => a - b);
    return lista;
  }
  
  var num = [2, 9, 3, 10, 1, 12];
  console.log(ordenarNumeros(num));