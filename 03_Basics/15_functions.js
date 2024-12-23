function Greeting() {
    console.log(`Hello Nikhil`);
}
// Greeting()

function add (a,b){
    console.log(a+b);
    return a+b
}
const result = add(2,4)
console.log(result);


function loginUserMessage(username = "Ramesh"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage("Kamlesh"))