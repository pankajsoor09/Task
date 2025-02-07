// Square each number in an array and sort it in ascending order.
// Note every square should be positive number.

/* Input : [2, 9, 0, -1, -12, 5, 8, -2]
Output : [0, 1, 4, 4, 25, 64, 81, 144] */

let arr =  [2, 9, 0, -1, -12, 5, 8, -2];

let squared_arr = arr.map(num => num * num);

console.log(squared_arr);

let sorted_arr = squared_arr.sort((a,b) => a-b);

console.log(sorted_arr); 

// same in one line

let numbers = [2, 9, 0, -1, -12, 5, 8, -2];
let result = numbers.map(num => Math.pow(num, 2)).sort((a, b) => a - b);
console.log(result);


//---------------------------

// You will be given an array of numbers. You have to sort the odd numbers in
//  ascending order while leaving the even numbers at their original positions.

/* [7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortOddNum (arr) {

    let oddNum = arr.filter(num => num % 2 != 0 ).sort((a,b) => a - b );

    return arr.map(num =>(num%2 !=0 ? oddNum.shift(): num ));

}

console.log(sortOddNum([7, 1] ));
console.log(sortOddNum([5, 8, 6, 3, 4]));
console.log(sortOddNum([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));