// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
//froEach do not return th value

// console.log(values); //udefined 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums);

// let newNums = myNums.filter( (num) => {
//    return num > 4
// })
// console.log(newNums); 

// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title: "Book one", genre: "fiction", Publish: 1981, edition: 2005},
    {title: "Book two", genre: "fiction", Publish: 1985, edition: 2012},
    {title: "Book three", genre: "non fiction", Publish: 1995, edition: 2012},
    {title: "Book four", genre: "science", Publish: 1995, edition: 2018},
    {title: "Book five", genre: "history", Publish: 1999, edition: 2017},
    {title: "Book six", genre: "science", Publish: 1990, edition: 2022},
    {title: "Book seven", genre: "fiction", Publish: 1991, edition: 2014},
    {title: "Book eight", genre: "science", Publish: 1996, edition: 2024},
    {title: "Book nine", genre: "mathematics", Publish: 1995, edition: 2003}
];

// const userBooks = books.filter( (bk) => bk.genre === "history")

const userBooks = books.filter( (bk) => {
    return bk.Publish >= 1995 && bk.genre === "history"})
console.log(userBooks);
