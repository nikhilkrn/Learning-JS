"use strict" ; // this will treat our code as newer version of javascript, but these days it is already that advance that it automatically treats as latest version not much needed but recomended

// alert("Helllo") // basically this will give a popup in browser but currently we are using node js which is not a browser so this will throw an error


/*console.log(9+2) console.log("Hello")*/      // we are getting error because of missing semi collon after 9+2 insted we need to krrp it in another line as it makes code looks readability poor ("Code Readability shouls be high")


/*
TYPES OF DATA TYPE
1)CALL BY VALUE (PREMITIVE)
    => String, Number, Boolean, Null, Undefined, Symbol, BigInt
3)CALL BY REFERENCE (NON PREMITIVE)
    =>ARRAY, OBJECTS, FUNCTIONS

*/

let Name = "Nikhil";
let rollNo = 12345
let isPresent = true;
let marks;

//Sting => Defined on "" or '' but prefered ""
//number =>  it is integer can store value upto 2^53
//bigint => if data is more than 2^53 then bigint is use usally used in finance sector company or fb like company which has more data, generally not much used
//boolean => gives true/false value 
//null =>standalone value , it is used when we want to keep something empty for example marks is undefined cause no value is given but we can also give marks = null which reprensent no value is present 
//undefined => no value is assigned or not defined , marks is undefined
//symbol => identify uniqueness  

//object ==> will be deicussed further


//these are the type of data
console.log(typeof Name);  //string
console.log(typeof rollNo);  // number 
console.log(typeof isPresent);  //boolean
console.log(typeof marks); //undefined
console.log(typeof undefined);  //undefined
console.log(typeof null); //object

// this is another method to console something and considerd as standard and has more readiability.
console.log(`Hello ${Name} is your roll no ${rollNo}`); // it is called string interpolation 

/*
OUTPUT

string
number
boolean
undefined
undefined
object

*/