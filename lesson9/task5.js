const users = [
    {
        name: "Anastasiia",
        email: "anastasiia@gmail.com",
        age: 25
    },
    {
        name: "Vlad",
        email: "vlad@gmail.com",
        age: 28
    },
    {
        name: "Olena",
        email: "olena@gmail.com",
        age: 30
    }
];
for (const { name, email, age } of users) {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
}