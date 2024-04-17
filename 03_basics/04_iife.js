//Immediatly Invoked Function Expression
//used for mmediate execution to encapsulate code and avoid global scope pollution.

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})(); //semi column is required here stop the context.

//()()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('nikhil');