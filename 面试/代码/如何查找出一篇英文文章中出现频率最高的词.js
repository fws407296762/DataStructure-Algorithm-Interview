let article = "Alibaba Group Founder Ma Yun tops the richest billionaires from the Chinese mainland in 2020, with wealth of $38.8 billion, according to the latest Forbes World Billionaires List." +
  "With $38.1 billion in wealth, Ma Huateng, founder of Tencent, grabbed the second spot on the richest list for this year." +
  "Xu Jiayin, chairman of Evergrande Group, and He Xiangjian, founder of Midea, took the third and fourth positions, with wealth of $21.8 billion and $ 21.6 billion, respectively."


function findMostWord(article){
  if(!article) return;

  article = article.trim().toLowerCase();

  let wordList = article.match(/[a-z]+/g),
      visited = [],
      maxNum = 0,
      maxWord = "";

  article = " " + wordList.join(" ") + " ";

  wordList.forEach(function(item){
    if(visited.indexOf(item) < 0){
      let word = new RegExp(" "+ item + " ","g");
      let num = article.match(word).length;

      if(num > maxNum){
        maxNum = num;
        maxWord = item
      }
    }
  })
  return maxWord + " " + maxNum;
}

console.log(findMostWord(article))