const num = 500;
console.log(num); // this is also a number but while printing on dev tools we get undefined written bellow it.



const score = new Number(500);
console.log(score);
//this is also a number which is explicitely defined and on console log we get to see [number: 500] along with some other compalable functions that can be used with it.

console.log(score.toString()); //this convert number to string and can use all string functions


console.log(score.toFixed(2)); //gives only "n" number of variable after decimal. in this case n =2

const bigNumber = 10000000;
console.log(bigNumber.toLocaleString()); //this prints number with comma as per indian standard but more depends on location incase if you are using online console with location in somewhere else then it shows as per there
console.log(bigNumber.toLocaleString('en-US'));

/*********************************  MATH **********************************/


console.log(Math);
console.log(Math.abs(-4)); // this is modulus operator changes -ve values to positive

console.log(Math.round(4.6));//this rounds of the values as per nearest integer
console.log(Math.ceil(4.2)); // this gives nearest largest integer
console.log(Math.floor(4.6)); //this takes number before decimal takes lower number
console.log(Math.sqrt(4)); //gives the square root of a number
console.log(Math.min(1,5,3,9,10)); // gives the minimum values among all given values
console.log(Math.max(1,5,3,9,10)); // gives the maximum values among all given values


/* 
    =>For more properties console Math in dev tools will get more properties compatable with Math
*/


//IMPORTANT
console.log(Math.random()); //this gives a random number between 0 to  1 
console.log(Math.floor(Math.random() *10 )+ 1); //this gives a random number between 0 to  1 and upon multiplying by 10 gives an integer greater than 1 but can get 0 as well so to avoid that we add 1 so that it ranges in between 1 to 10.

const min = 20;
const max = 40;

console.log(Math.floor(Math.random() * ( max - min +1) + min));
// this will give a random number in between max and min 
/*
    THIS IS HOW IT IS GIVING A RANDOM NUMBER BETWEEN MAX AND MIN
    1=> Math.random() is generating a random number between 0 and 1
    2=> We need to get the range og number for that we are subtracting MAX - MIN and to avoid 0 we are adding 1 so minimum number will be 1 and Maximum will me Min(in this case 20)
    3=> TO get a number in between MIN AND MAX we add min to it. 
    4=> To get a single rounded off digit Math.floor is added.
*/