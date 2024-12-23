const marvel_heros = ["spiderman", "thor","ironman"]
const dc_heros = ["flash" , "superman" ,"batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // add dc_heros as an array to marvel_heros

let allheros = marvel_heros.concat(dc_heros);//this also joins the array but has some limitaion like only add two array
console.log(allheros);

// another method
//this is called spread operator this joins the string 
const allnewheros = [...marvel_heros, ...dc_heros]
console.log(allnewheros);

//this flatens the array like makes a single or as per or need array from nested array
const num = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const allnum = num.flat(Infinity); // in this case there is 2 array inside array so if we put 2 then makes single array but if we put 1 then [4,5] will be there in array while other will be joined including [4,5] however ifinity opens all array inside no matter how nested array is it joins all them together
console.log(allnum);


console.log(Array.isArray("Nikhil")); // checks whether given value is array or not and returns true or false
console.log(Array.from("Nikhil")); // Makes the value to array and anything can be passed as value
console.log(Array.from({Name:"nikhil"})); //this gives empty array . to make array of object need to specify whether array of key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));


/*              OUTPUT               */
/**
    [ 'spiderman', 'thor', 'ironman', 'flash', 'superman', 'batman' ]
    [ 'spiderman', 'thor', 'ironman', 'flash', 'superman', 'batman' ]
    [
        1, 2, 3, 4, 5,
        6, 7, 6, 7, 4,
        5
    ]
    false
    [ 'N', 'i', 'k', 'h', 'i', 'l' ]
    []
    [ 100, 200, 300 ] 
 */