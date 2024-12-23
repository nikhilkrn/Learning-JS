const user = {
    user : "Suresh",
    price : 1000,
    welcome : function(){
        console.log(`${this.user}, welcome to website`);
        // console.log(this);
        
    }
}
//this => represent current context

user.welcome()
user.user = "Nikhil"
user.welcome()


function add(){
    let username = "kamlesh"
    console.log(this.username); // gives undefined this cannot be used along function
}

// add()


const arrowFuntion =  () => {
    let username = "kamlesh"
    console.log(this);
}

// arrowFuntion()

const addtwo = (num1,num2) => {
    return num1 + num2
}
console.log(addtwo(4,5))

//implicit return
const addthree = (num1,num2) => num1 + num2

const obj = () => ({user : "ramesh"}) //generally () this bracket is used if using implicit return function

console.log(obj())