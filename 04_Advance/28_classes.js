class User {
    constructor(username , email , password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password} abc`
    }
    CapitalizeUser(){
        return `${this.username.toUpperCase()}`
    }
}

const UserOne = new User("Nikhil", "nikhil@gpt.com","12345")

console.log(UserOne.encryptPassword());
console.log(UserOne.CapitalizeUser());

//BEHIND THE SCENE

function UserTwo(username, Email,Password) {
    this.username = username;
    this.Email = Email;
    this.Password = Password;
}

UserTwo.prototype.EncryptPass = function(){
    return `${this.Password} abc`
}
UserTwo.prototype.capitalizeUser = function(){
    return `${this.username.toUpperCase()}`
}

const userTwo = new UserTwo("Ramesh", "Ramesh@gmail.com", "Suresh143")

console.log(userTwo.EncryptPass());
console.log(userTwo.capitalizeUser());
