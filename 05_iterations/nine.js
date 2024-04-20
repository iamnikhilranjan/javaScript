/**
 * Reduce:
 * In JavaScript, the reduce() function is a powerful method used to reduce an array to a single value. 
   It iterates through each element of the array, performing a specified operation (such as addition, concatenation,
   or any custom function) on each element, and accumulates the result into a single value.
 */

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0)
// console.log(myTotal);

const shoppingCart = [
{
    itemNmae: "js course",
    price: 2999
},
{
    itemNmae: "python",
    price: 999
},
{
    itemNmae: "mobile dev",
    price: 1999
},
{
    itemNmae: "MERN",
    price: 4999
}
]

const priceToPay = shoppingCart.reduce( (acc, item) =>acc + item.price, 0)

console.log(priceToPay)