/*
 Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Example 1:

Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".

Example 2:

Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

Note:

    The length of both lists will be in the range of [1, 1000].
    The length of strings in both lists will be in the range of [1, 30].
    The index is starting from 0 to the list length minus 1.
    No duplicates in both lists.

Seen this question in a real interview before?  

    Difficulty:Easy
    Total Accepted:10.3K
    Total Submissions:21.5K
    Contributor: love_Fawn

    Subscribe to see which companies asked this question.
    Related Topics


    Similar Questions
    Intersection of Two Linked Lists
 */

/**
思路： 哈希表,叠加，注意最小值相等和小于两种不同处理方式
*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var commonResturantsList = {};
    var result = [];
    var minIndex = 2001;
    for(var i = 0; i < list1.length; i++) {
        commonResturantsList[list1[i]] = i; 
    }
    
    for(var j = 0; j < list2.length; j++) {
        if (commonResturantsList[list2[j]] !== undefined) {
            commonResturantsList[list2[j]] += j;
            if (commonResturantsList[list2[j]] == minIndex) {
                result.push(list2[j]);
            } else if (commonResturantsList[list2[j]] < minIndex) {
                minIndex = commonResturantsList[list2[j]];
                result = [];
                result.push(list2[j]);
            }
        }
    }
    
    return result;
};