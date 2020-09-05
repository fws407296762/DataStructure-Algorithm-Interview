function foo(){
  getName = function () {
    console.log("输出1")
  }
  return this;
}

foo.getName = function(){console.log("输出2");}
foo.prototype.getName = function(){console.log("输出3");}
var getName =  function(){console.log("输出4");}
function getName(){console.log("输出5");}

foo.getName();        //2
getName();            //4
new foo.getName();    //2
new foo().getName();  //3
getName();            //1

