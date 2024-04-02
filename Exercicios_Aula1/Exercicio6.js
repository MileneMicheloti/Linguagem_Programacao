/*faça uma função que pede um numero para o usuário e mostre o dobro do numero passado. 
Casa o numero for menor ou igual a 0 deve mostrar a mensagem "Só é aceito numero positivos e maiores que zero"*/

function mostrarDobro(numero) {
    
    if (numero <= 0) {
        return "Só são aceitos números positivos e maiores que zero";
    } else {
        // Retorna o dobro do número
        return numero * 2;
    }
}

// Exemplos de uso da função
console.log(mostrarDobro(5)); // Saída: 10 (dobro de 5)
console.log(mostrarDobro(-3)); // Saída: "Só são aceitos números positivos e maiores que zero"
