
// var c = 300

let a = 300
if (true){
    let a = 10 
    const b = 20
    console.log("INNER: ",a);
    // var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
     const username = "Nikhil"

     function two(){
        const website = "youtube"
        console.log(username);
     }
    //  console.log(website); -- website is not in this scope.
        two()
}
one()

// ***************** Interesing *****************************
/** Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing 
    scope during the compile phase, before the code execution. This means that you can use variables and functions before they 
    are declared in your code, but it's important to understand that only the declarations are hoisted, not the initializations. */

//function declararion
console.log(addone(5))

function addone(num){
    return num + 1 
}



//functions expression:
console.log(addTwo(5)) // TypeError: addTwo is not a function

 const addTwo = function(num){
   return num + 2   
}

