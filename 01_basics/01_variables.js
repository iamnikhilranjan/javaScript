const accountId = 144553;
let accountEmail = "nikhil@outlook.com"
var acocuntPassword = "1234"
accountCity = "Jaipur"  //This way of declaring variable is not good
let accountState;       // undefined when printed.    

//acocuntId = 2; //not allowed

accountEmail = "nik@gmail.com";
acocuntPassword = "212121";
accountCity = "Bengaluru";

/*
Prefer not to use var 
because of issues in block scope and functional scope. 
*/

console.log(accountId);
console.table([accountId, accountEmail, acocuntPassword, accountCity, accountState]);