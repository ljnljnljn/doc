/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
   let resArr = [];
   resArr[0] = 1;
   resArr[1] = 1;
   for(let i = 2; i <= n; i++) {
       resArr[i] = 0
       for(let j = 0; j < i; j++) {
           resArr[i] += resArr[j] * resArr[i - j - 1]
       }
   } 
   return resArr[n]
};

console.log(numTrees(3))