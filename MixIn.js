class Person {
 eating(){
   console.log("eating")
 }

}

class Student extends Person{
  sutdying(){
    console.log("studying")
  }
}



function MixInTeacher(student) {
  class NewPerson extends student{ 
    teaching(){
      console.log("teaching")
    }
  }
  return NewPerson
}

const newPerson = MixInTeacher(Student)
const newone = new newPerson()
console.log(newone.teaching, newone.sutdying)