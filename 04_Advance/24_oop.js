const objuser = {
    user: "Ramesh",
    login : "Recently",
    signedIn : true,
    getuserdetail : function () {
    console.log(`Accesed Data ${this.user}`);
    }
}

console.log(objuser.user);
console.log(objuser.getuserdetail());

function user (username,logincount,isLogedind){
    this.username = username
    this.logincount = logincount
    this.isLogedind = isLogedind
    
    return this
}

let userOne =new user("Suresh", 10 , true)
let userTwo =new user("Ramesh", 14 , false)

console.log(userOne);
console.log(userTwo);
