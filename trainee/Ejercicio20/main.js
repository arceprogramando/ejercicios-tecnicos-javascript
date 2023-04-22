let user = {
    nombres: "John",
    age: 30
};



const viewUser = (object) => {
    console.log(object)
    console.log(user.name)
    console.log(user.age)
    console.log("age" in user)

}

viewUser(user);