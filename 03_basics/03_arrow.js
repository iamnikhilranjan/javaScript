//`this` refers to the context in which a function is executed
const user = {
    username: "Nikhil",
    price: 999 ,

    welcomeMessaage: function() {
        console.log(`${this.username}, welcome to website`); //this -- current context
        console.log(this);
    }
}

// user. welcomeMessaage()
// user.username = "sam"
// user.welcomeMessaage()

// console.log(this);      //{}

// function chai(){
//     let username = "nikhil"
//     console.log(this.username); // in object context only ,not in functions
// }

// chai()  //undefined
 
// const chai = function(){
//     let username = "Nikhil"
//     console.log(this.username)
// }

const chai = () => {
    let username = "Nikhil"
    console.log(this.username)
}

// chai()   //undefined

//basics
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return
// const addTwo = (num1, num2) => num1 + num2

//NOTE: {} -- return, () -- no return.

const addTwo = (num1, num2) => ({username: "nikhil"})


console.log(addTwo(4, 3));