// new Array(); []
// new String();
// new Number(); 12
// new Boolean(); true false

let obj = {};
let obj1 = new Object();

function Usuario() {
    this.name = "Chanchito feliz";
}
let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1+1");
console.log(eval(s1), eval(s2));