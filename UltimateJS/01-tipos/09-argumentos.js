function sum (a, b){
    console.log(arguments);
    return a + 2;
}

let result = sum(5, 6, 4, 3, 2, 1);
console.log(result);

console.log(typeof sum);