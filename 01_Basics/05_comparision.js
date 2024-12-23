//if a number is being comapred to other number which is in string then js converts both numbers in number and compares
console.log( 2 > 1); //true
console.log("2" > 1); //true
console.log("2" > "3"); //false
console.log("2" == 2); //true


// js identifies null as 0 while compqring but null == 0 is false cause it is equality check and <= works differently thats why null>= 0 is true and null == 0 is false
console.log(null > 0); //false
console.log(null == 0 ); //false 
console.log(null >= 0 ); //true


//comparing anything with undefined gives false 
console.log(undefined >= 0); //false
console.log(undefined == 0); //false
console.log(undefined > 0); //false

// === this strictly checks the datatypes and then only compares if datatype are different then output will be false and if it is same and condition is satisfies then output will be true 
console.log("3" === 3 ); //false
console.log(3 === 3 ); //true

