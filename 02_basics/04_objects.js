// const tinderUser = new Object()
const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = { 
    email: "some@gmai.com",
    fullname:{
        firstname: "With",
        lastname: "Nikhil"
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2) //{} -- is target and other are source

const obj3 = {...obj1, ...obj2} //spread
// console.log(obj3);

const users = [
    {
    id: 1,
    email: "h@gmail.com"
    },
    {
    id: 1,
    email: "h@gmail.com"
    },
    {
    id: 1,
    email: "h@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //important
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); //every key value is converted into array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to know if the property is available or not
