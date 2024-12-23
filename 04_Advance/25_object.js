function add(num) {
    return num+5
}

add.power = 2 ;

console.log(add(5));
console.log(add.power);
console.log(add.prototype);

function createuser(username , score) {
    this.username = username
}