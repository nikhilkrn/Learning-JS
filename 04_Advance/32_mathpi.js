const desc = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(desc);

const chai = {
    name : "Masala Chai",
    price : 20,
    isAvilable : true,
    orderChai : function(){
        console.log("Code fat gaya");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai , "name",{
    writable : false,
    enumerable : false,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.table(`${key} ${value}`)
    }

}
