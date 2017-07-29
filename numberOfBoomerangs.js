 /**
Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:

Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]

*/

/**
思路：
1. 遍历所有点，设置每个点为i， 然后遍历其他点
2. 设置一个hash存取每个点到其他点距离
3. 然后遍历hash 对于出现次数大于2的进行排列组合n(n-1）,叠加到结果中
4. 然后换个点继续操作
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var res = 0;
    
    for (var i = 0; i < points.length; i++) {
        var hash = {};
        for (var j = 0; j < points.length; j++) {
            var a = points[i][0] - points[j][0];
            var b = points[i][1] - points[j][1];
            
            var dis = a*a + b*b;
            if (hash[dis] === undefined) hash[dis] = 1;
            else hash[dis]++;
        }
        
        for (var k in hash) {
            if (hash[k] >= 2) res += (hash[k] * (hash[k] - 1));
        } 
    }
    
    return res;
};