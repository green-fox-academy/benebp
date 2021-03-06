// Create Student and Teacher classes
//  Student
//    learn() -> prints the student is learning something new
//    question(teacher) -> calls the teachers answer method
//  Teacher
//    teach(student) -> calls the students learn method
//    answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

'use strict';

export class Students {

  learn ():void {
    console.log('Learning somethnig new.');
  }

  question (teacher:Teacher):void {
    teacher.answer();
  }
}

export class Teacher {

  teach (student:Students):void {
    student.learn();
  }

  answer ():void {
    console.log("Answering the student's question.");
  }
}

let s1 = new Students;
let t1 = new Teacher;

s1.question(t1);
t1.teach(s1);