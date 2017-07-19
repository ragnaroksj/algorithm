/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again). 
*/

/**
思路：区别是这里可以交易无限多次（当然我们知道交易不会超过n-1次，也就是每天都进行先卖然后买）。既然交易次数没有限定，可以看出我们只要对于每次两天差价大于0的都进行交易，就可以得到最大利润。因此算法其实就是累加所有大于0的差价既可以了，非常简单。如此只需要一次扫描就可以了
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if( prices.length === 0 ) return 0;
    var res = 0;
    var prev = prices[0];
    
    for( var i = 1; i < prices.length; i++ ){
        var tmp = prices[i] - prev;
        prev = prices[i];
        
        if( tmp > 0 ) res+= tmp;
    }
    
    return res;
};
