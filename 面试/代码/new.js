// 方法一
function createNew(){
    let _this = {};
    let constructor = [].shift.call(arguments);
    _this.__prop__ = constructor.prototype;
    let result = constructor.apply(_this,arguments);
    return typeof result === "object" ? result : _this;
}

function Peolpe(name,age){
    this.name = name;
    this.age = age;
}

let peo = createNew(Peolpe,"a",12);
console.log(peo.name);
console.log(peo.age);

