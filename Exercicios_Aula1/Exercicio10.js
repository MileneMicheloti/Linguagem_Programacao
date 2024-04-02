/* escreva uma funçaõ que verifique se uma determinada string é um palindromo (ou seja pode ser lida da mesma forma tanto da direita para esquerda
quanto da esquerda para direita) exemplo: arara */

function ehPalindromo(str) {
    str = str.toLowerCase().replace(/\s/g, '');

    // Inverte a string
    var inverso = str.split('').reverse().join('');

    // Verifica se a string original é igual à sua versão invertida
    return str === inverso;
}

console.log(ehPalindromo("arara"));
console.log(ehPalindromo("Ana"));
console.log(ehPalindromo("queijo"));
console.log(ehPalindromo("palavra"));
