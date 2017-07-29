/**
 * 
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

var generate = function(numRows) {
    var tri = [];
    for( var i = 0; i < numRows; i++){
        tri[i] = [1];
        for( var j = 1; j < i+1; j++){
            tri[i].push(tri[i-1][j-1]+tri[i-1][j]);
        }
        tri[i][i] = 1;
    }
    
    return tri;
};
