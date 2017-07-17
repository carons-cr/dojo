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
            console.log('for'+student.name);
            console.log('It is not one of us.');
        }else{
            this.leader=student.id;
        }
    }
    appendMember(student){
        this.member=new Array();
        this.member.push(student.id);
    }
    isIn(student){
        if(student.klassClass==this){
            return true;
        }
        return false;
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
    constructor(id,name, age,klasses) {
        super(id,name, age);
        this.klasses=klasses;

    }
    introduce(){
        var str=super.introduce()+' I am a Teacher. I teach ';
        if(this.klasses.length==0){
            str+='No Class.';
        }else{
            var classesIndex=this.klasses[0].number;
            for(var i=1;i<this.klasses.length;i++){
                classesIndex+=','+this.klasses[i].number;
            }
            str+='Class '+classesIndex+'.';
        }
        console.log(str);
        // return str;
    }
    isTeaching(student){
        for(var i=0;i<this.klasses.length;i++){
            if(this.klasses[i].isIn(student)){
                console.log(this.name+" is teaching "+student.name);
                return true;
            }
        }
        return false;
    }
}
var klassClass1=new Class(1);
var klassClass2=new Class(2);
var klasses1=new Array();
var klasses2=new Array();
var klasses3=new Array();
klasses1.push(klassClass1);
klasses1.push(klassClass2);
klasses2.push(klassClass1);
var student1 = new Student(1,'Tom',21,klassClass1);
var student2 = new Student(2,'Bob',22,klassClass1);
klassClass1.appendMember(student1);
klassClass1.assignLeader(student1);
klassClass1.assignLeader(student2);
student1.introduce();
student2.introduce();
var teacher1 =new Teacher(1,'Tom',20,klasses1);
teacher1.introduce();
teacher1.isTeaching(student1);
var teacher2 =new Teacher(2,'BOb',21,klasses2);
teacher2.introduce();
teacher2.isTeaching(student1);
var teacher3 =new Teacher(3,'BOb',22,klasses3);
teacher3.introduce();
teacher3.isTeaching(student1);