let myname = "Nikhil     ";
console.log(myname.length);


let myheros = ["Thor", "Spidey"]

let hereos ={
    thor : "hammer",
    spideman : "Sling", 
    getSpidyPower : function (){
        console.log(`Spidy Power : ${this.spideman}`);
    }
}

Object.prototype.NikhilObj = function(){
    console.log(`This is created by nikhil`);
    
}
hereos.NikhilObj()

myheros.NikhilObj()

Array.prototype.NikhilArray = function(){
    console.log(`This is array `);
    
}

myheros.NikhilArray()
// hereos.NikhilArray()


//Inheritance = Old Method
const user = {
    userName : "Ramesh",
    email : "ramesh@gmail.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvilable : false
}

const TASupport = {
    MakeAssignmnet : 'JS',
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user

console.log((teacher.userName));


//Modern Method

Object.setPrototypeOf(teachingSupport,teacher)

console.log(teachingSupport.userName)

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
    
}

myname.truelength()

"NIT      ".truelength()
