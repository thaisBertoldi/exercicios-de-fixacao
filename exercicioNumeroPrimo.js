// Escreva uma função que tenha um número como argumento
// Se o número for primo, retorna o número
// Caso contrário, retorna o próximo número primo mais alto

function numeroPrimo(num) {
    let temp = 0;
    let temp2 = 0;
    
    while (temp2 !== 1) {
        temp2 = 0;
        for(let i=0; i<num; i++){
            temp = num % i
            if(temp === 0){
                temp2 += 1;
            }
        }   
        if(temp2 > 1) num ++;
    }

    return num;
    
}
console.log(numeroPrimo(38))