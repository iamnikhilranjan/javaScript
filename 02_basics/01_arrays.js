// arrays

const myArr = [0, 1, 2, 3, 4, 5, true, "Nikhil"] // elements can be different

// js arrays are resizable

// console.log(myArr[0]);

//shallow copy - whose properties share the same references
//deep copy - properties do not share the same referneces

const myHeroes = ["shaktiman", "Nagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]);

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2))

// const newArr = myArr.join()   // join all the array elements and convert it into string.

// console.log(myArr);         
// console.log(newArr);
// console.log(typeof newArr); // string

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // manipulated the original array as well
console.log("C ", myArr);
console.log(myn2);


