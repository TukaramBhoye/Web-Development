
const sum = (a, b) => a + b; 
const mul = (a, b) => a * b; 
const g = 9.8; 
// here variable will treat like normal variable not like other module.exports . 
exports.PI = 3.14; 

// module.exports is a object. properties, methods if want to sent into same directory we use this method.
module.exports = "hello";

let obj = {
    sum : sum, 
    mul : mul, 
    g : g, 
    PI: PI,
};
module.exports = obj; 


