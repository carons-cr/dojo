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
class Student extends Person{
    constructor(name, age,klass) {
        super(name, age);
        this.klass=klass;
    }
    introduce(){
        var str=super.introduce() +' I am a Student. I am at Class '+this.klass+'.';
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
}
var person=new Person('Tom',21);
person.introduce();
var student = new Student('Tom',21,2);
student.introduce();
var teacher =new Teacher('Tom',21);
teacher.introduce();