// Escreva uma função que recebe uma string como argumento
// Do jeito que está, a string não tem significado
// Aumente cada letra para a próxima letra do alfabeto
// Retorna a palavra correta
// testes: 'bnchmf' , 'bgddrd' , 'sdrshmf'


function corrigirPalavra(str) {
  let b = ''
  for(let i=0; i<str.length; i++) {
    var c = String.fromCharCode(str.charCodeAt(i)+1);
    b = b +c;
  }
  return b.match(/\w/g).join('')
}
console.log(corrigirPalavra('bnchmf'))