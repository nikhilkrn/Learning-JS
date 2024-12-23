class User {
    constructor(username) {
        this.username =username
    }
    loggedIn(){
        return `Username : ${this.username}`
    }
}

class teacher  extends User{
    constructor(username,email,password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`Course Added by ${this.username}`);
    }
}

const teach = new teacher("Ramesh", "ramesh@gmail.com", "12345")

teach.addCourse();


const userTwo = new User("Suresh")
console.log(userTwo.loggedIn())

// userTwo.addCourse()

console.log(teach.loggedIn())



