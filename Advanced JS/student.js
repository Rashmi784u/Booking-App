class student {
  static count = 0;

  constructor(name, age, ph_no, marks) {
    this.name = name;

    this.age = age;

    this.ph_no = ph_no;

    this.marks = marks;

    student.countStudent();
  }

  static countStudent() {
    return student.count++;
  }

  eligible() {
    if (this.marks >= 40) {
      console.log(`${this.name} age ${this.age} is eligible`);
    } else if (this.marks < 40) {
      console.log(`${this.name} age ${this.age} is not eligible`);
    }
  }
}

const Riya = new student("Riya", 18, 1234, 34);

const Kiranaa = new student("Kiranaa", 15, 2345, 85);

const Diya = new student("Diya", 16, 4567, 30);

const Priya = new student("Priya", 17, 7891, 70);

const Siya = new student("Siya", 19, 3456, 80);

console.log(student.countStudent());

Riya.eligible();

Kiranaa.eligible();

Diya.eligible();

Priya.eligible();

Siya.eligible();
