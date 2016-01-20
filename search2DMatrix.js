/*
* Search a 2D Matrix
* Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
	Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.
* @param {number[][]} matrix
* @param {number} target
* @return {boolean}
*
* leetcode
*/

/*
* Search a 2D Matrix II
* Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
    Integers in each row are sorted in ascending from left to right.
    Integers in each column are sorted in ascending from top to bottom.
* @param {number[][]} matrix
* @param {number} target
* @return {boolean}
*
* lettcode
*/

var searchMatrix = function(matrix, target) {
	var m = martix.length, n = matrix[0].length, i = 0, j = 0;
	while( i < m && j < n){
		if( target > matrix[i][n-j-1] ){
			i++;
		}else if( target < matrix[i][n-j-1]){
			j++;
		}else return true;
	}
	return false;
}