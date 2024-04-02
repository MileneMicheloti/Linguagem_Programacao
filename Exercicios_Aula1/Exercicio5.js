/*Escreva um programa que imprima os números de 1 a 10 no console na mesma linha 
usando estrutura de repetição. Os números devem ser separados por um traço exemplo: 1 - 2 - 3,
apos o numero 10 não pode haver um traço*/


var resultado = "";

// Loop "for" para iterar de 1 a 10
for (var i = 1; i <= 10; i++) {

    resultado += i;

    if (i !== 10) {
        resultado += " - ";
    }
}

console.log(resultado);
