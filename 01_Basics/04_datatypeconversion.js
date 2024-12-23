
// let marks = 123;
// let marks = "123abc";
// let marks = null;
// let marks = true;
let marks = "true";

//line no 2 defines makrs as number but in line no 3 it is defined as string, In js we can convert from one datatype to other for example in line no 10 string is converted to number but in marks there is some alphabet also abc while retriving its data type we are still getting number which is not true but value of convertedNumber is NaN (Not a Number), but null gives value 0, undefined stil gives NaN, true => 1 & false => 0, and any string gives NaN

console.log(typeof(marks));

let convertedNumber = Number(marks)
console.log(typeof(convertedNumber));
console.log(convertedNumber);


/*
Output when makrs = 123
string
number

Output when marks  = "123abc" , undefined
string
number
NaN

output when marks = null
object
number
0

Output when marks = true
boolean
number
1 // 0 when false

Output when any string is given marks  = "true"\
string
number
NaN 

*/


let isPresent = undefined; //anything 0 or null or empty gives => false output and even if anything is assigned except 0 or null or undefined gives true 

let booleanIsPresent = Boolean(isPresent)

console.log(typeof booleanIsPresent);
console.log(booleanIsPresent)


/*
Output when isPresent  = 1
boolean
true

output when isPresent = "" 
boolean
false

output when isPresent = "abc"
boolean
true

*/


let regNo = 123;

let stringRegNo = String(regNo)

console.log(typeof stringRegNo);
console.log(stringRegNo);


                            /*****************OPERATIONS*******************/

let num = 5;
let negNum = - num;
console.log( negNum); // -5 

console.log(2+2);
console.log(2*2);
console.log(2-2);
console.log(2/2);
console.log(2%2);
console.log(2**3);


let str1 = "hello";
let str2 = " world"
let str3 = str1 + str2 ;
console.log(str3);   //hello world


//follows the order of precidence from first letter to last letter if first and second is number then addition takes palce then string is concatinated 

//if the string comes first then whatever is after that sting it get concatinated
console.log(1 +"2"); //12
console.log("1"+ 2); // 12
console.log("1"+ 2 + 2); // 122
console.log(2 + 2 + "1"); //42
console.log(2 + "2" + 1); //221
// these are not used in real life or production code 

console.log(true);      //true
console.log(+true);     //1
console.log(+false);     //0
console.log(+"");   //0 

//this is not considered as standard as it doesnot make code readable
let num1 , num2, num3;
num1 = num2 = num3 = 1+2 ;

let a = 2
y = ++a ; //prefix ((preincrement) => increase the value and return the increased value

let x = 3
z = x++ ;  //postfix (postincrement) => increase the value but returns the previous value
console.log(a , y);  //3 3
console.log(x , z); // 4 3

