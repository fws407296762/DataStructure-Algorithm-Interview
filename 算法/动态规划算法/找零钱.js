/*
有数组penny，penny中所有的值都为正数且不重复。每个值代表一种面值的货币，每种面值的货币可以使用任意张，再给定一个整数aim(小于等于1000)代表要找的钱数，求换钱有多少种方法。给定数组penny及它的大小(小于等于50)，同时给定一个整数aim，请返回有多少种方法可以凑成aim。
测试样例：
penny=[1,2,4]
penny_size=3
aim = 3
返回：2
即：方案为{1，1，1}和{1，2}两种

*/
let coins = [2,5,10]
let amount = 10

function change_1(amount,coins){
    let dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    for(let j = 1;j<=coins.length;j++){
        for(let i = coins[j - 1];i<amount + 1;i++){
            dp[i] = dp[i] + dp[i - coins[j - 1]];
        }
    }
    return dp[amount];
}
console.log(change_1(amount,coins));
