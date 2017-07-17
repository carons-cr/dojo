/**
 * Created by cr on 7/17/17.
 */
class Person{
    constructor(id,name, age) {
        this.id=id;
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
    assignLeader(student){
        if(this.member.indexOf(student.id)==-1){
            console.log('It is not one of us.');
        }else{
            this.leader=student.id;
        }
    }
    appendMember(student){
        this.member=new Array();
        this.member.push(student.id);
    }
}
class Student extends Person{
    constructor(id,name, age,klassClass) {
        super(id,name, age);
        this.klassClass=klassClass;
    }
    introduce(){
        var str=super.introduce()+' I am a Student. I am ';
        if(this.id===this.klassClass.leader){
            str+='Leader of Class '+this.klassClass.number+'.';
        }else{
            str+='at Class '+this.klassClass.number+'.';
        }
        console.log(str);
        // return str;
    }
}
class Teacher extends Person{
    constructor(id,name, age,klass) {
        super(id,name, age);
        this.klass=klass;
    }
    introduce(){
        var str=super.introduce()+' I am a Teacher. I teach ';
        if(this.klass==null){
            str+='No Class.';
        }else{
            str+='Class '+this.klass+'.';
        }
        console.log(str);
        // return str;
    }
}
var klassClass=new Class(3);
var student1 = new Student(1,'Tom',21,klassClass);
var student2 = new Student(2,'Bob',22,klassClass);
klassClass.appendMember(student1);
klassClass.assignLeader(student1);
klassClass.assignLeader(student2);
student1.introduce();
student2.introduce();
var teacher1 =new Teacher(1,'Tom',21);
teacher1.introduce();
var teacher2 =new Teacher(2,'BOb',21,3);
teacher2.introduce();