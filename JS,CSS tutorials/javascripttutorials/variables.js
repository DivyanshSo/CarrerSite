// console.log("This is the start of javascript:");

/*three variables are there in javascript:-
    1.let, :- when you can't use const. (blockscope,not redeclared)
    2.var, :- only for old browsers.  (blockscope,variables can be redeclared, later one is final value.)
    3.const :- when value remains constant.  (not redeclarable)
*/
// var a = 5;
// var b = 6;
// console.log(a+b);

// console.log(typeof(b));
// var c = "divyansh";
// console.log(c)

// console.log("divyansh soni");
// var a;
// a=8;
// console.log(a);

// let b = 20;
// let c = 27;
// let z = b + c;
// console.log(z);

// const pi = 3.14;
// let r = 5;
// let R = pi*r*r;
// console.log("the area of the circle is:", R);

//considers "$" as a letter.
// let x = "5"+ 2 + 6;
// console.log(x);

// let b = "John" + " " + "Doe";
// console.log(b);

var a = 10;
console.log(a); //latest value is used here.
{
var a = 0;
}
console.log(a); //latest value is used here.