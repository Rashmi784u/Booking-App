class Student {
  constructor(name, age, marks) {
    this.name = name;
    this.age = age;
    this.marks = marks;
  }
  setPlacementAge(minPlacementAge) {
    return (minMarks) => {
      if (this.marks > minMarks && this.age > minPlacementAge) {
        console.log(this.name + "is egligible for placements");
      } else {
        console.log(this.name + "is not egligible for placements");
      }
    };
  }
}
const Ram = new Student("Ram", 25, 75);
const Sham = new Student("Sham", 15, 55);
const Kiran = new Student("Kiran", 23, 70);
const Amit = new Student("Amit", 16, 60);
const Om = new Student("Om", 26, 65);

Ram.setPlacementAge(18)(40);
Sham.setPlacementAge(18)(40);
Kiran.setPlacementAge(18)(40);
Amit.setPlacementAge(18)(40);
Om.setPlacementAge(18)(40);
