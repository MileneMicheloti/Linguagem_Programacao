//Escreva uma função que receba uma string como argumento e devolva essa string invertida

function inverterString(str) {
    // Divide a string em um array de caracteres, inverte o array e junta novamente em uma string
    return str.split('').reverse().join('');
}

var stringOriginal = "Milene Micheloti";
var stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
