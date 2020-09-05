var lis = document.getElementsByTagName("li");
for(var i=0;i<lis.length;i++){
  (function(i){             //每次都创建了一个 function 对象，存放在内存
    lis[i].onclick = function(){
      console.log(i);
    };
  })(i);       //事件处理函数中闭包的写法
}