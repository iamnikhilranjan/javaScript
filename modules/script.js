//Modules
//1. Creating and Exporting modules
//Create a module that exports a function to add two numbers. Import and use module in another script

// import { multiply as mul } from "./utility.js";
// import * as utility from "./utility.js" //imports all functions form utility.js

import addition from "./utility.js"

// const result = utility.multiply(2, 3, 4);
const result = addition(2, 4, 5)

console.log(result);



