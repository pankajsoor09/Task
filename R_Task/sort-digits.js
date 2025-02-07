/*
Create a function which takes an integer as an argument and it will return the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

function sortDigits(num){
    return Number(num.toString().split('').sort((a,b) =>b-a).join(''));
}

console.log(sortDigits(42145));
console.log(sortDigits(145263));
console.log(sortDigits(123456789));

let arr = [1,2,3]

let arre = arr.shift();

console.log(arre)
console.log(arr)