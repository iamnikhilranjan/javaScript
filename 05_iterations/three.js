//forin 
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
//array keys are by default, are numbers and starts from 0

// for (const key in programming) {
//     console.log(key);          // will only print 
// }

for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('JPN', "Japan")
// map.set('USA', "United States Of Ameerica")

// for (const key in map) {
//     console.log(key);
// } 

//cannot be iterated in maps

//NOTE: arrays -- for of loop , objects -- for in loop.
