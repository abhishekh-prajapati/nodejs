const fs = require ('fs');

// fs.readFile('file.txt','utf8',(err, data) =>{
//     console.log(err, data)
// })
// const a = fs.readFileSync("file.txt")
// console.log(a)

// const b = fs.readFileSync("file.txt")
// console.log(b.toString())

// fs.writeFile('file2.txt',"This is the data", () =>{
//     console.log('written to the file')
// });
b = fs.writeFileSync('file2.txt',"This is the data2")
console.log(b)
// console.log(" finished reading file")