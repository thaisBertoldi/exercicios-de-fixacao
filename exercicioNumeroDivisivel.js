//Escreva uma função que receba dois números, digamos x e y, como argumentos
// Verifique se x é divisível por y
// Se sim, retorna x
// Caso contrário, retorna o próximo número natural mais alto que é divisível por y

function numeroDivisivel(x, y) {
    while(x % y !== 0) x++
    return x
}
console.log(numeroDivisivel(20, 23))