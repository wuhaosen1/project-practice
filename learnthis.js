var num1 = 1
var num2 = 2

function add() {
  this.num1 = num1
  this.num2 = num2
  return num1+num2
}
function sub() {
  this.num1 = num1
  this.num2 = num2
  return num1-num2
}
var foo = add.bind(sub)
console.log(foo(num1,num2))