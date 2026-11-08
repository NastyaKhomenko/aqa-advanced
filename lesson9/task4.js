const person = {
    firstName: "John",
    lastName: "Smith",
    age: 25
};
person.email = 'test@gmail.com'
delete person.age;
console.log(person);