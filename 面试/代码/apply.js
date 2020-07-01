Function.prototype._apply = function(context){
    if(typeof context === "function"){
        throw new TypeError()
    }
    context = context || global;
    context.fn = this;
    let result;
    if(arguments[1]){
        result = context.fn(arguments[1])
    }else{
        result = context.fn()
    }
    delete context.fn;
    return result;
}