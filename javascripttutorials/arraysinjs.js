// reference types in js:- objects(collection of key-value pairs), arrays(colln. of items),function....
/*array built-in functions:- push,pop,shift(leftmost deleted),unshift(leftmost added),slice(new part),splice(content change),map(performs operation with a function),
filter(divides data),reduce(executes a reducer function for array element). */

//object is created here in js...
// let obj = {
//     name : "divyansh",
//     age : 21,
//     "course" : "b.tech cse",
//     height : "5ft 9in",
//     greet : function(){
//         console.log("namaste! sab logo ko:");
//     }
// };

// console.log(obj);                 
// obj.greet();

//creation of an array..
let arr = [1,2,3,4,5];
console.log(arr);

//array constructor...
let brr = new Array('divyansh',21,'btech');
console.log(brr);

console.log(typeof(arr));
console.log(typeof(brr));
console.log((brr[2]));