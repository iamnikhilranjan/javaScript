//for of loop

// ["", "",""]
// [{}, {}, {}] 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`)  
} 

//maps -- key value pairs

const map = new Map()
map.set('IN', "India")
map.set('JPN', "Japan")
map.set('USA', "United States Of Ameerica")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-',value);
}
//maps are iterable

const myObject = {
    'Game1': 'NFS',
    'Game2': 'Spiderman'
}

for(const [key, value] of myObject){ 
    //console.log(key, ':-',value);
}
//myObject is not iterable

