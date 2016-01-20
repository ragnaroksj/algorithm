/*
* power of 2
* leetcode
*/

function PowersofTwo(num) { 
  if( num == 1) return true;
  else if( num < 1) return false;
  else return PowersofTwo(num/2);         
}


function PowersofTwoII(num) { 
  return (num != 0) && ((num & (num - 1)) == 0);     
}