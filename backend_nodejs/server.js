
const { error } = require("console")
const fs = require("fs")
console.log(fs)

console.log("starting")
// fs.writeFileSync("hello.txt", "hello! i am under the water")
// console.log("the end")

fs.writeFile("hello2.txt", "hello! i am in laying in my bed", () =>{
  console.log("done")
  fs.readFile("hello2.txt", (error, data) =>{
    console.log(error, data.toString())
  })
})

console.log("the end")