function a() {
  var i = 0;
  function b() {
    console.log(++i);
  }
  return b;
}

var c = a();
var c2 = a();
c();
c();
c2();
c2();