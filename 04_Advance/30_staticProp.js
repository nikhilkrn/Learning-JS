class User {
    constructor(username) {
        this.username =username
    }
    loggedIn(){
        console.log( `Username : ${this.username}`)
    }
    static createId(){
        return '123'
    }
}

class teacher  extends User{
    constructor(username,email) {
        super(username)
        this.email = email
    }
    addCourse(){
        console.log(`Course Added by ${this.username}`);
    }
}

const UserOne = new User("Nikhil");
// console.log(UserOne.createId());
const UserTwo = new teacher("Nikhil","nikhil@gmail.com");
console.log(UserTwo.loggedIn());
console.log(UserTwo.createId());

