/**
 * Created by cr on 7/17/17.
 */
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce(){
        var str='My name is '+this.name+'. I am '+this.age+' years old.';
        //console.log(str);
        return str;
    }
}
class Class{
    constructor(number) {
        this.number=number;
    }
}
class Student extends Person{
    constructor(name, age,klassClass) {
        super(name, age);
        this.klassClass=klassClass;
    }
    introduce(){
        var str=super.introduce() +' I am a Student. I am at Class '+this.klassClass.number+'.';
        console.log(str);
        // return str;
    }
}
class Teacher extends Person{
    constructor(name, age,klass) {
        super(name, age);
        this.klass=klass;
    }
    introduce(){
        var str=super.introduce();
        if(this.klass==null){
            str+=' I am a Teacher. I teach No Class.';
        }else{
            str+=' I am a Teacher. I teach Class '+this.klass+'.';
        }
        console.log(str);
        // return str;
    }
    introduceWith(student){
        var str=super.introduce();
        if(this.klass===student.klassClass.number){
            str+=' I am a Teacher. I teach '+student.name;
        }else{
            str+=" I am a Teacher. I don't teach "+student.name;
        }
        console.log(str);
    }
}
var person=new Person('Tom',21);
person.introduce();
var klassClass=new Class(3);
var student = new Student('Tom',21,klassClass);
student.introduce();
var teacher1 =new Teacher('Tom',21);
teacher1.introduce();
teacher1.introduceWith(student);
var teacher2 =new Teacher('Tom',21,3);
teacher2.introduce();
teacher2.introduceWith(student);