var n = 0
function a() {
 var n = 10 
 function b() {
   n++
   console.log(n, this)
 }
 b()
 return b
}

var c = a()
c()
console.log(n)