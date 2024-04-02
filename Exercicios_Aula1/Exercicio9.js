/* Esecreva uma função que recebe um endereço de email como argumento e retorna true se o email for valido ou false caso contrario
um email valido deve conter um unico simbolo '@' e pelo menos um ponto '.' apos o '@' */

function validarEmail(email) {

    var indexArroba = email.indexOf('@');
    if (indexArroba === -1 || email.indexOf('@', indexArroba + 1) !== -1) {
        return false;
    }


    var indexPonto = email.indexOf('.', indexArroba);
    if (indexPonto === -1 || indexPonto === email.length - 1) {
        return false;
    }

    return true;
}


console.log(validarEmail("email@gmail.com"));
console.log(validarEmail("sem@ponto"));
console.log(validarEmail("semarroba.com.br"));


