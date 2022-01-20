// 1.call方法实现
// Function.prototype.hscall = function(thisArg,...args){
//   var fn = this 
//   thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window
//   thisArg.fn = fn 
//   var result = thisArg.fn(...args)
//   delete thisArg.fn
//   return result
// }
// function foo() {
//   console.log("foo被调用",this)
// }
// foo.hscall(0)



//2.apply方法实现
// Function.prototype.hsapply = function(thisArg,args) {
//   var fn = this
//   thisArg = (thisArg !== undefined && thisArg !== null ) ? Object(thisArg) : window
//   thisArg.fn = fn
//   args = args || []
//   var result = thisArg.fn(...args)
//   delete thisArg.fn
//   return result
// }
// function foo(num1,num2,num3,num4,num5) {
//   console.log("foo被调用",this)
//   var total = num1 + num2 + num3 + num4 + num5
//   console.log(total)
// }
// foo.hsapply(0,[1,2,3,4])



// 3.bind 方法实现
// Function.prototype.hsbind = function(thisArg,...args) {
//   var fn = this
//   thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window  
//    function proxybind(...arg) {
//     thisArg.fn = fn
//     var totalarg = [...args,...arg]
//     var result = thisArg.fn(...totalarg)
//     delete thisArg.fn
//     return result
//   }
//   return proxybind
// }

// function foo(num1,num2,num3){
//   console.log(num1,num2,num3,this)
// }

// var bar = foo.hsbind("xxx",1,2)
// bar(3)

//4.call方法实现
// Function.prototype.hscall = function(thisArg,...args) {
//   var fn = this
//   //绑定this指向
//   thisArg = (thisArg !== undefined && thisArg !== null) ? Object(thisArg) : window
//   thisArg.fn = fn
//   var result = thisArg.fn(...args)
//   delete thisArg.fn
//   return result
// }
// function foo() {
//   console.log("foo被调用",this)
// }

// foo.hscall('abc')

function foo (...args) {
  let arr = [...args]
  let arr1 = [].slice.call(args)
  let arr2 = Array.prototype.slice.call(args)
  let arr3 = Array.from(args)
  console.log(arr,arr1,arr2,arr3)
}
foo.call(1,2,3,4,5)