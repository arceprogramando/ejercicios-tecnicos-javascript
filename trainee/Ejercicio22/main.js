let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // claves
    console.log(`Las keys de este objeto son: ${key}`);  // name, age, isAdmin
    // valores de las claves
    console.log(`Los value en su key son: ${user[key]}`); // John, 30, true
}