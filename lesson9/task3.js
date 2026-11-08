const car1 = {
    brand: "Dodge",
    model: "Dart",
    year: 2015
};

const car2 = {
    brand: "Tesla",
    model: "Model 3",
    owner: 2019
};
const car3 = {...car1, ...car2};

console.log(car3);