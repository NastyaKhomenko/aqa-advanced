function handleNum(num, evenCallback, oddCallback) {
    if (num % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
}
function handleEven() {
    console.log("Number is even");
}

function handleOdd() {
    console.log("Number is odd");
}
handleNum(3, handleEven, handleOdd);
handleNum(4, handleEven, handleOdd);
handleNum(2.3, handleEven, handleOdd);