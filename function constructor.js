function Student(firstName,lastName,rollNumber,Sex,dateofbirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNumber = rollNumber;
    this.Sex = Sex;
    this.dateofbirth = dateofbirth;
}

Student.prototype.findegligibleOrNot = function findegligibleOrNot(minAge){
    if (this.dateofbirth > minAge){
        console.log(this.firstName+this.lastName + " he is egligible ");
    }else {
        console.log(this.firstName+this.lastName + " he is not egligible ");
    }
}

const student1 = new Student("Ravi ", "Patil");
const student2 = new Student("Kiran ", "Patel");

student1.findegligibleOrNot(10/11/2018);
student2.findegligibleOrNot(12/07/2016);