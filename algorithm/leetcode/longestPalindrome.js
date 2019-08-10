/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 1) return s;
    var length = string.length;
    var result = "";
  
    var centeredPalindrome = function(left, right) {
      while (left >= 0 && right < length && string[left] === string[right]) {
        //expand in each direction.
        left--;
        right++;
      }
  
      return string.slice(left + 1, right);
    };
  
    for (var i = 0; i < length - 1; i++) {
      var oddPal = centeredPalindrome(i, i + 1);
  
      var evenPal = centeredPalindrome(i, i);
  
      if (oddPal.length > 1)
        console.log("oddPal: " + oddPal);
      if (evenPal.length > 1)
        console.log("evenPal: " + evenPal);
  
      if (oddPal.length > result.length)
        result = oddPal;
      if (evenPal.length > result.length)
        result = evenPal;
    }
    return result
};

