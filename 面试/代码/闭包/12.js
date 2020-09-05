var fn = (function () {
  let i = 10;
  function fn() {
    console.log(++i);
  }
  return fn;
})();

fn();
fn();