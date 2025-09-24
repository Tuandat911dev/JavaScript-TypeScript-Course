console.log("Video 30");


function greeting(name) {
    console.log("Hello " + name);
}

greeting("Army");

// sum
function sum(a = 0, b = 0) {
    return a + b;
}

console.log("Sum with default value: " + sum());
console.log("Sum with parameters: " + sum(9, 6));
console.log("Sum with parameters: " + sum("tuan dat", " is handsome"));

let sumCalculate = sum;

console.log(sumCalculate(1, "Eric"));