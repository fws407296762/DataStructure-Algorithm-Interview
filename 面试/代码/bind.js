Function.prototype._bind = function(context){
    if(typeof this !== 'function'){
        throw new TypeError("no function")
    }
    let _this = this;
    let args = [...arguments].slice(1);
    return function F(){
        if(this instanceof F){
            return new _this(...args,...arguments);
        }else{
            return _this.apply(context,args.concat(arguments));
        }
    }
}