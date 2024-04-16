// function addTwonumbers(number1, number2){  // number2 and number2 are parameters
//     console.log(number1 + number2);
// }

function addTwonumbers(number1, number2){  // number2 and number2 are parameters
//    let result = number1 + number2
//    return result
      return number1 + number2
}

// addTwonumbers(3, 4) // here arguments are passed
// assTwoNumbers(3, null)

const result = addTwonumbers(3,5)
// console.log("Result: ", result);

function loginUserName(username){
    if(!undefined ){
        console.log("Please enter a user name.");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserName("nikhil"));
// console.log(loginUserName());  //undefined

function claculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(claculateCartPrice(200, 500, 400, 600));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));
