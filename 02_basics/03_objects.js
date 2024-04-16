//singleton

// Object literals
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Nikhil",  // name is taken as a string
    "full name": "Nikhil Ranjan", // cannot be accesed by dot
    [mySym]: "mykey1",     // Using symbol as key (intreresting)
    age: 20,
    email: "nikhil21907@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Minday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);  //noe " " has been used here
// console.log(typeof JsUser[mySym]);

JsUser.email = "nikhilandjpn@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "nikhilandjpn@outlook.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); //[Function (anonymous)] -- function execute nhi hua h , bas uska reference aaya h
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());