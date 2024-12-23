//global scope
let a = 10
const b = 20 
var c = 30 

if (true){
    //block scope
    let a = 10
    const b = 20 
    var c = 30 

}
console.log(a,b,c);

function parent(){
    const username = "Nikhil"
    //parent cant access child variable but child can access parent variable
    function child(){
        const website = "instagram"
        console.log(username);
    }
    child()
    // console.log(website);
}
parent()


console.log(add(6))
function add(num2) {
    return num2 +1
}

// console.log(addnum(5)) this will give error
const addnum = function (num){ //this is also function but sometime known as expression
    return num +1
}
console.log(addnum(5))
