function substraction(num) {
    if (num <= 0) {
        return;
    }
    console.log(num);
    substraction(num - 1);

}
substraction(5);