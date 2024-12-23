let Name = "Nikhil";
let age = 20;

//this method to write console is more readable and more often used than others 
console.log(`hello ${Name}, Are you ${age} year old?`); //this is called string interpolation 

const FirstName = new String('Nikhil Karn');

/*
    In js srting is considered as an object having key value pair.
    to learn more about this open developer tool in brower and paste "const FirstName = new String('Nikhil');" you will be able so see Nikhil printed and aslo after expanding we se something like 0: N 1:i and so on which means it is an object but on further expanding you will see bunch of properties like written bellow which is compatable with given data types.
*/

console.log(FirstName.length); //Gives the length of string
console.log(FirstName.toUpperCase()); // converts the valte to upper case
console.log(FirstName.charAt(3)); // gives an character at particular index which is taken as input like 3

console.log(FirstName.indexOf('k')); // prints the index of particular character
console.log(FirstName.anchor("nikhilkarn.com.np"));  //gives an anchor tag like in HTML the output will be "<a name="nikhilkarn.com.np">Nikhil</a>"

const anotherName = FirstName.substring(0,5);
console.log(anotherName); //takes character from index 0 to 4 on this case. takes one index less than given.

const newstring = FirstName.slice(-10, 5)
console.log(newstring);
//this does similar to substring but takes even negative integer which starts from negative of starting index as zero index (in this case -11 = 0 )

const NameTrim = "    nikhil         "
console.log(NameTrim);
console.log(NameTrim.trim());  //this removes whitespaces between text 

console.log(Name.replace("Nikhil","Ramesh")); //this replaces the value of variable with other. accepts two inputs

console.log(Name.includes("ikh")); //this checks if given value is present in variable or not and returns true and false

console.log(Name.split("i")); //this returns an array after spliting an variable on the basis of values given in this case i have given "i"