let array1 = [6, 2, 1, 8, 10];
let minValue1 = Math.min(...array1);
let maxValue1 = Math.max(...array1);
let sum1 = array1.reduce((total, array1) => total + array1, 0);
let result1 = sum1 - minValue1 - maxValue1;

console.log(`Sum of array1 = ${result1}`);

let array2 = [1, 1, 11, 2, 3];
let minValue2 = Math.min(...array2);
let maxValue2 = Math.max(...array2);
let sum2 = array2.reduce((total, array2) => total + array2, 0);
let result2 = sum2 - minValue2 - maxValue2;

console.log(`Sum of array2 = ${result2}`);

let array3 = [1];
if (array3.length <= 1) { console.log(0); }
else {
    let minValue3 = Math.min(...array3);
    let maxValue3 = Math.max(...array3);
    let sum3 = array3.reduce((total, array3) => total + array3, 0);
    let result3 = sum3 - minValue3 - maxValue3;

    console.log(`Sum of array3 = ${result3}`);
}