 function calculateCartPrice(...num){ // ... is rest operator it pack up all values and return array
    return num 
}

console.log(calculateCartPrice(100,200,300,400));

const user ={
    username: "Suresh",
    price : 6969
}

function handlingObject(obj) {
    console.log(`username is ${obj.username} price ${obj.price}`);
}
handlingObject(user)


const arrlist = [0,20,30,40,50]
function arr(getArray) {
    return getArray[1]
}
console.log(arr(arrlist));

