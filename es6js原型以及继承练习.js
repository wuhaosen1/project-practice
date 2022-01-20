class Person {
  constructor(name,age){
    this.name = name
    this.age = age
  }
 static eating(){
   console.log(this.name+"eating")
 }

 Prunning() {
   console.log(this.age+"Person.running ")
 }
 static sfunction(){
   console.log("static test")
 }

}

class Student extends Person{
  constructor(name,age,num){
    super(name,age)
    this.number = num
  }

  running() {
    super.Prunning()
    console.log("running")
  }

  static test2() {
    super.sfunction()
    console.log("student static test")
  }
}

var stu1 = new Student("xixi",18,111)
console.log(stu1)
stu1.running()
Student.test2()




