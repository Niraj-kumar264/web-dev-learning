let a = prompt("enter first number")
let b = prompt("enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry only number are allowed")
    
}
let sum = parseInt(a) + parseInt(b)
console.log("the sum of two number is" , sum)
