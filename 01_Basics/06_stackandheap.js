//all primitive datatypes have stack memory ==> in stack memoty orignal value is not change a copy of orignal value is assigned where changes is occured but orignal values remains same

//all non premitive data type have heap memory ==> in heap memory directly orignal value is accessed where changes takes place in orignal values by changing all values


//stack memory gives a copy of data but heap give reference of data
let num = 100;

let anotherNum = num;

anotherNum = 200;
console.log(anotherNum, num);

let anObj = {
    Name : "heraLal",
    email:"hiralal@gmail.com"
}

let anotherObj = anObj;

anotherObj.email = "motilal@gmail.com"

console.log(anObj.email)
console.log(anotherObj.email)