/* Escreva uma função que recebe uma string como argumento e retorna o numero de vogais presentes nessa string.
 Considere apenas vogais minusculas (a, e , i, o, u) */

function contarVogaisMinusculas(str) {

    var contador = 0;

    for (var i = 0; i < str.length; i++) {

        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            contador++;
        }
    }


    return contador;
}

var string = "MIlenE LeIte MichElOti";
var numVogais = contarVogaisMinusculas(string);
console.log("Número de vogais minúsculas na string:", numVogais);
