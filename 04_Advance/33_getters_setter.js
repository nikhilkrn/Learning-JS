class user {
    constructor(username,email) {
        this.username = username
        this.email = email
    }
    get email(){
        return `${this._email} Ramesh`
    }
    set email(value){
        this._email = value
    }
    get username (){
        return `${this._username} is valid in get`
    }
    set username(value){
        this._username = value
    }
}

const userOne = new user("Nikhil", "nikhil@gmail.com")

console.log(userOne.email);
console.log(userOne.username);



// FUNTION *********OLD METHOD**********
function User(username,email) {
    this._email = email;
    this._username = username;

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email = value
        }
    })
    Object.defineProperty(this,'username',{
        get:function(){
            return this._username.toLowerCase()
        },
        set:function(value){
            this._username = value
        }
    })
}
const userTwo = new User("NIKHIL", "nikhil@gmail.com")
console.log(userTwo.username);



