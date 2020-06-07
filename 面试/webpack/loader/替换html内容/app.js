let template = require("./template.html");

function rods(nums,target){
  if(!nums.length){return []};
  let map = {};
  for(let i = 0;i<nums.length;i++){
    let item = nums[i];
    let cha = target - item;
    let hasCha = map.hasOwnProperty(cha);
    if(hasCha){
      return [map[cha],i]
    }
    map[item] = i;
  }
}