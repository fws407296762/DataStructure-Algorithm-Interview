Function.prototype._call = function(context){
    if(typeof this !== 'function'){
        throw new TypeError("no function")
    }
    context = context || global;
    context.fn = this;
    let agrs = [...arguments].slice(1);
    let result = context.fn(...agrs);
    delete context.fn;
    return result;
}


function fn1(){
    console.log('fn1')
}

function fn2(){
    console.log('fn2')
}

fn1._call(fn2) // 此时输出显而易见的 fn1
fn1._call._call(fn2)