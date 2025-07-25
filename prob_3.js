// 📝 Problem 3:

// 📘 Scenario:
// You're building a class-based system to manage students. Each student has a:
// name

// age

// enrolled subjects (as an array)

// score

// You should be able to:
// Enroll new students

// Assign a grade based on score 

// Display a summary of all students and their status

// 🏗️ Starter Code:
// class Student {
//   constructor(name, age, score, subjects) {
//     this.name = name;
//     this.age = age;
//     this.score = score;
//     this.subjects = subjects;
//   }

//   getGrade() {
//     // TODO: return "A", "B", "C", or "F" based on score
//   }

//   addSubject(subject) {
//     // TODO: push new subject to this.subjects
//   }

//   getSummary() {
//     // TODO: return something like "Anna (18) - Grade B - Subjects: Math, Science"
//   }
// }

// // You can create multiple students:
// const student1 = new Student("Anna", 18, 85, ["Math", "Science"]);
// const student2 = new Student("Mark", 20, 92, ["English"]);
// const student3 = new Student("Lara", 19, 72, ["Math", "History"]);

// const students = [student1, student2, student3];

// // Now loop through and print their summaries.
// 🎯 Tasks:
// Implement getGrade() method:

// A = 90 and above

// B = 80–89

// C = 70–79

// F = below 70

// Implement addSubject(subject) method so you can add a new subject for any student.

// Implement getSummary() method that returns:
// "Anna (18) - Grade B - Subjects: Math, Science"
// Print a summary of all students using a loop.

class Student {
    constructor(name, age, score, subjects){
        this.name = name;
        this.age = age;
        this.score = score;
        this.subjects = subjects;
    }
    
    set name(newName){
        typeof newName === "string" && newName.length > 0 ? this._name = newName : console.log("Provide a valid name")
    }
    
    get name(){
        return this._name
    }
    
    set age(newAge){
        newAge > 0 ? this._age = newAge : console.log("Provide a valid age")
    }
    
    get age(){
        return this._age
    }
    
    getGrade(){
        let grade;
        
        if(this.score >= 90){
            grade = "A";
        }else if (this.score >= 80){
            grade = "B";
        }else if (this.score >= 79){
            grade = "C";
        }else {
            grade = "F";
        }
        
        return grade;
    }
    
    addSubject(subject){
        this.subjects.push(subject)
    }
    
    getSummary(){
        console.log(`${this.name} ${this.age} - Grade ${this.getGrade()} - ${this.subjects.join(", ")}`);
    }
}

const student1 = new Student("Anna", 18, 85, ["Math", "Science"]);
const student2 = new Student("Mark", 20, 92, ["English"]);
const student3 = new Student("Lara", 19, 72, ["Math", "History"]);

const students = [student1, student2, student3];

students.forEach(e => {
    e.getSummary();
})


