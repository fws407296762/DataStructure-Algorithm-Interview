new Promise(function(resolve,reject){
  console.log("Promise1")
  resolve();
}).then(function(){
  console.log("then1");
})

console.log("cl1");

setTimeout(function(){console.log("timeout1")},0)

setTimeout(function(){console.log("timeout2")},0)

setTimeout(function(){console.log("timeout3")},0)

new Promise(function(resolve,reject){
  console.log("Promise2")
  setTimeout(function(){
    console.log("timeout_Promise2")
  },0)
  resolve();
}).then(function(){
  console.log("then2");
})

new Promise(resolve=>{
  console.log("Promise3")
  for(let i =0;i<10000;i++){
    i == 9999 && resolve();
  }
  console.log("Promise3_1")
}).then(()=>{
  console.log("Promise_then_3")
})


// 第二个宏任务
setTimeout(function () {
  console.log('定时器')

  // 第三个宏任务
  setTimeout(function () {
    console.log('定时器中的定时器')
  },0)

  new Promise(function (resolve) {
    console.log('准备执行 for 循环111')

    for (let i = 0; i < 666; i++) {
      i == 5 && resolve()
    }
    // .then 属于微任务，第二个宏任务中的微任务
  }).then(function () {
    console.log('执行了 then 方法1111')
  })

}, 0)