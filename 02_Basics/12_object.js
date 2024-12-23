// if object delcared as literals then it is not singleton
//if made using constructor then it is always singleton

// Object.create   ==>this is constructor

//OBJECT LITERALS
const user = {
    Name:"Kamlesh",
    age:20,
    location:"Mars",
    isLoggedin: false,
    lastLoginDays : ["Monday","thrusday"],
    "email": "jssekhrahahu@gmail.com" //this cannot be acces by user.email so we need to use user[email]
} //this is literals

console.log(user.Name); //how to access object
console.log(user["location"]); //another method to access js object
console.log(user["email"]);

///////?CHANGING VALUE OF OBJECT 
user.age = 25;
console.log(user);//this is how values are changed in objects

/*
    Object.freeze(user); //this freezes the objects and prevent to changes further .doesnt allow to change afterward 
    user.Name = "Ramesh"
    console.log(user);

*/

user.greeting = function(){
    console.log("hello there");
    
}
console.log(user.greeting); //[Function (anonymous)]
console.log(user.greeting());  //hello there  undefined

user.greetingAgain = function(){
    console.log(`hello ${this.Name}`);
}

console.log(user.greetingAgain());






///////////////////////SYMBOL\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const sym = Symbol("Key1");

const user1 = {
    Name:"Nikhil",
    age:20,
    location:"Mars",
    isLoggedin: false,
    [sym] : "Symbol1", //this is how a symbol is added to a object if [] is removed then it is considered as string
}
console.log(user1[sym]); //while accessing also no need to add columns
