let reg = /^(\w)+\s*(\:)(\=)\s*(\d)+$/;
let str = "a := 1";
console.log(str.match(reg));