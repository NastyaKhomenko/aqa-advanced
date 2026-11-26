function rectangle1(width, height) { // function declaration
    return width * height;
}
let s1 = rectangle1(4, 5);
console.log(s1);

let rectangle2 = function (width, height) { // function expression
    return width * height;
}
let s2 = rectangle2(3, 2);
console.log(s2);

let rectangle3 = (width, height) => { // arrow function
    return width * height;
}
let s3 = rectangle3(3, 4);
console.log(s3);