function SetUser(username) {
    this.username = username
}

function CreateUser(username,email,password) {
    SetUser.call(this,username)
    this.email = email;
    this.password = password
}

const userone = new CreateUser("Ramesh", "Ramesh@gmail.com", "12345")
console.log(userone);
