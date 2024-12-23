const arr = [0,1,2,3,4,5];
const heros = ["spiderman","ironman","batman"];

//Another method to declare array
const newarr = new Array(1,2,3,4,5) // no need to add square bracket, it automatically add square brackets

console.log(newarr[0]);

//ARRAY METHOD

arr.push(11); //add values to array at end
// console.log(arr);
arr.pop() //remove last value from array
arr.unshift(7); //add values to starting of array
arr.shift(); //this removes the values at sarting of array
console.log(arr);

console.log(arr.includes(10));//gives true or false if value is present or absent respectively
console.log(arr.indexOf(5)); // gives index of element if present incase absent gives -1

const strarray = arr.join(); // joins the array and returns the string

console.log(strarray);
console.log(typeof strarray); //string


//IMPORTANT METHOD slice splice
console.log("1) ", arr );

const AnotherArr = arr.slice(1,3);
console.log(AnotherArr);
console.log("2) ",arr);

const AnotherArr2 = arr.splice(1,3)
console.log(AnotherArr2);
console.log("3) ",arr);
//Slice deoesnt include (first,last) last number and also doesnt changes the array but splice includes the last number and remove the element after splice by changing the orignal array


/*              OUTPUT               */
/*
    1)  [ 0, 1, 2, 3, 4, 5 ]
    [ 1, 2 ]
    2)  [ 0, 1, 2, 3, 4, 5 ]
    [ 1, 2, 3 ]
    3)  [ 0, 4, 5 ]

*/