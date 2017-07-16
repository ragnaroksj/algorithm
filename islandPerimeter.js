/*
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Answer: 16
 */

/*
思路：
对每个小块进行上下左右连接以及边界检查， 然后返回每个小块应该算上的周长
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var perimeter = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                perimeter += checkConnection(i,j, grid); 
            }
        }
    }
    
    return perimeter;
};

var checkConnection = function(i, j, grid) {
    var top = 0, right = 0, bottom = 0, left = 0;
    if (!i || !grid[i-1][j]) top = 1;
    if (!j || !grid[i][j-1]) left = 1;
    if ((i === grid.length - 1) || !grid[i+1][j]) bottom = 1;
    if ((j === grid[i].length - 1) || !grid[i][j+1]) right = 1;
    
    return top + right + bottom + left;
}
