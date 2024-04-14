/**
 two types of datatypes on the basis of how data are stored and accesed in memory.
 1. Primitive datatype
 2. Non Primitive datatype. 
 */

 /* primitive datatypes :
 7 types : String, Number , Boolean, null, undefined, symbol, BigInt*/   
 
 const score = 100
 const scoreValue = 100.3
 
 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;
 
 // const id = symbol('123')
 // const anotherId = symbol('123')
 // console.log(id === anotherId);
 
 const bigNumber = 345653423414542n;
 
  /*Non Primitive (Reference) : 
  Arays, Objects, FUnctions */ 
 
 const heros = ["shaktiman","naagraj","doga"];
 let myobj = {
     name: "Hitesh",
     age: 22,
 }
 
 const myfunctoion = function(){
     console.log("Hello World!");
 }
 
 console.log(typeof bigNumber);  // BigInt
 console.log(typeof myfunctoion);  // function
 
 //data type of  nonprimitive datatypes are called functions, datatype of function is called function object.
 
 //***********************************************************************/
 // stack (primitive), Heap(Non primitive)
 
 let myYoutubename = "withnikhil"
 let anothername = myYoutubename
 anothername = "chaiaurcode"
 
 console.log(myYoutubename);
 console.log(anothername);
 
 let userOne = {
     email: "user@google.com",
     upi: "user@ybl"
 }
 
 let userTwo = userOne
 userTwo.email = "withnikhil@gmail.com"
 
 console.log(userOne.email);
 console.log(userTwo.email);