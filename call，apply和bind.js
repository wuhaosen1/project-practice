// Function.prototype.hscall = function(thisargs,...args){
//   //拿到执行函数
//   var fn = this
//   //处理指向的this对象，且赋值到此对象
//   var thisargs = (thisargs !== null && thisargs !== undefined)?Object(thisargs):window
//   thisargs.fn = fn
//   //拿到函数执行结果并返回，且删除原函数新增属性
//   var result = thisargs.fn(...args)
//   delete thisargs.fn
//   return result
// }

// function add (num1,num2) {
//   console.log(this)
//   console.log(num1+num2)
// }
// add.hscall(123,122,232)



// Function.prototype.hsapply = function(thisargs,arrys) {
//   //获取执行函数
//   var fn = this
//   //处理传入的this指向
//   thisargs = (thisargs !== undefined && thisargs !== null) ? Object(thisargs) : window
//   thisargs.fn = fn 
//   var result
//   arrys = arrys || []
//   result = thisargs.fn(...arrys)
//   delete thisargs.fn
//   return result
// }

// function bar() {
//   console.log("bar函数被执行", this)
// }
// bar.hsapply(0)

Function.prototype.hsbind = function(thisargs,...args) {
  var fn = this
  thisargs = (thisargs !== null && thisargs !== undefined) ? Object(thisargs): window
  return function proxybind(...args1) {
      thisargs.fn = fn
      var finalargs = [...args,args1]
      var result = thisargs.fn(...finalargs)
      delete thisargs.fn
      return result
        
  }
}
function foo() {
  console.log("foo被执行", this)
  return 20
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4)
}

// 自己bind使用
var bar = foo.hsbind("abc")
bar()

