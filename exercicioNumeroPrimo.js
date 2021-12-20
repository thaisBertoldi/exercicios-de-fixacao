// Escreva uma função que tenha um número como argumento
// Se o número for primo, retorna o número
// Caso contrário, retorna o próximo número primo mais alto

function numeroPrimo(num) {
    
    let temp = 0;
    while (temp !== 1) {
        temp = 0;
        for(let i=0; i<num; i++){ 
            if(num % i === 0){
                temp += 1;
            }
        }   
        if(temp > 1) num ++;
    }

    return num;
    
}
console.log(numeroPrimo(38))