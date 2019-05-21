// Inheritence
console.log('-----Start of Inheritance------')
class Sum{
    constructor(){
        this.sum = (x,y) => console.log('Sum is '+(x+y));
    }
    
}
class Calculator extends Sum{
    constructor(sum){
        super(sum);
    }
}
new Calculator().sum(3,3);
// Data abstraction
console.log('-----End of Inheritance-------')
console.log('-----Start of Data abstarction-------')
class Student{
    constructor(){  
        this.name='';
        this.age='';
        this.stClass='';
  // Setters   
     this.setName = (name) => {
        this.name=name;
     }
     this.setAge = (age) => {
        this.age=age;
    }
    this.setSClass = (sClass) => {
        this.stClass=sClass;
    }
    // Getters
    this.getName = () =>{
        return this.name;
    }
    this.getAge = () =>{
        return this.age;
    }
    this.getSClass = () =>{
        return this.stClass;
    }
    }
}
var student=new Student();
student.setName('Danny');
student.setAge(23);
student.setSClass('Year 3');
var sName=student.getName();
var sAge=student.getAge();
var sClass1=student.getSClass();
console.log('Student Info: '+'Name =>'+sName+' Age => '+sAge+' Class: '+sClass1);
console.log('-----End of Data abstarction')
// polymorphism
console.log('-----Start of polymorphism----')
class Employee{
    constructor(){

        this.getEmployee = (name,title,salary) =>{
            this.name=name;
            this.title=title;
            this.salary=salary;
            console.log('Employee info: Name=> '+this.name+', Title=> '+this.title+', Salary => '+this.salary+' FRW');
        }
    }

}
class Manager extends Employee{
 constructor(getEmployee){
     super(getEmployee);
 }
}
class Receiptionist extends Employee{
    constructor(getEmployee){
        super(getEmployee);
    }
   }
   class Cleaner extends Employee{
    constructor(getEmployee){
        super(getEmployee);
    }
   }
var cleaner =new Cleaner().getEmployee('Emmy','Cleaner',20000);
var receiptonist =new Receiptionist().getEmployee('Kabera','Receiptionist',100000);
var manager =new Manager().getEmployee('Sebanani','Manager',400000);
console.log('-----Start of polymorphism-----')