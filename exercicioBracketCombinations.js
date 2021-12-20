/* Have the function BracketCombinations(num) read num which will be an integer greater 
than or equal to zero, and return the number of valid combinations 
that can be formed with num pairs of parentheses. For example, if the input is 3, 
then the possible combinations of 3 pairs of parenthesis, namely: 
()()(), are ()()(), ()(()), (())(), ((())), and (()()). 
There are 5 total combinations when the input is 3, so your program should return 5. */

//utilizando a fórmula de Catalan
function BracketCombinations(num) { 

    var catalan = function(num) {
        let C = 1;
        for (let i = 0; i < num; ++i) {
            C = C * 2 * (2 * i + 1) / (i + 2);
        }
        return C;
    };
    
    return catalan(num)

}
 
console.log(BracketCombinations(3));