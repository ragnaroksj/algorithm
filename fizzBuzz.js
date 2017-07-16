/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var result = [];
    for(var i = 1; i <= n; i++) {
        result[i-1] = '';
        if (!(i%3)) result[i-1] ='Fizz';
        if (!(i%5)) result[i-1] += 'Buzz';
        if ((i%3) && (i%5)) result[i-1] += i;
    }
    return result
};