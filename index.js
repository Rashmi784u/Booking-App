let a=3;
let b=6;

//[a,b] = [b,a];

a = a+b;
b = a-b;
a = a-b;

console.log("The value of a is = "+a);
console.log("The value of b is = "+b);