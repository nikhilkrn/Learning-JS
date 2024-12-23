const user = new Object() //singleton object
const user2 = {} //non singleton object


user2.id = "111"
user2.Name = "Kamlesh"
user2.IsLoggedIn = false

//console.log(user2);

const anotherUser = {
    email : "kamleshSekhejs@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Kamlesh",
            lastName : "Prashad"
        }
    },
    location : "Bhopal"
}

//console.log(anotherUser.fullName.userFullName.firstName);

////PROCESS OF COMBINING OBJECTS
const ob = { 1: "A" , 2: "B"}
const ob2 = { 3: "C" , 4: "D"}

const obj3 = {ob , ob2}
// console.log(obj3); 
//Output
//{ ob: { '1': 'A', '2': 'B' }, ob2: { '3': 'C', '4': 'D' } }

const obj4 = Object.assign({},ob,ob2);
console.log(obj4);
//{ '1': 'A', '2': 'B', '3': 'C', '4': 'D' }


/*
    assign({},ob,ob2)  
    => {} = target
    => ob = source

this syntax is used of more object ia there to be combined 
if not added then it will combine and add to ob(first element) and ob == obj4 but if added an empty object then combined object will be empty object and will be stored in obj4
*/


//ANOTHER METHOD
const obj5 = {...ob,...ob2} //same as array spread method
console.log( obj5);

console.log(Object.keys(obj5)); //returns an array of keys
console.log(Object.values(obj5));
console.log(Object.entries(user2)); //returns an array of key value pair
//OUTPUT 
//[ [ 'id', '111' ], [ 'Name', 'Kamlesh' ], [ 'IsLoggedIn', false ] ]