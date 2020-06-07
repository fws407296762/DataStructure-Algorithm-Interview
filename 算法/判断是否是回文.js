function isPalindrom(str){
  return str === str.split("").reverse().join("");
}

console.log(isPalindrom("abcbab"))