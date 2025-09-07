/*Js has 8 dataypes:- string,number,bigint,boolean,undefined,null,symbol,object.
* has dynamic datatypes:- same variable can hold different data types...
* strings can be single or double quotes.....
 */

// let length = 16;   //numbers...
// let area = 32.5;
// console.log(typeof(area));

// let color = "white";   strings....
// let shape = "round"
// console.log(typeof(shape,color));

// let bool = true;
// let notbool = false;
// console.log(typeof(bool,notbool));

// const person = {firstname: "Divyansh",lastname: "Soni"};
// console.log(typeof(person));

// let c = 10 + 1 + "volvo";    //evaluates the datatypes from left to right....
// console.log(c);

//*******Functions in Js...
// let degreecelsius = fahrenhiettocelsius(110);

// function fahrenhiettocelsius(fahrenheit){
//     return (5/9) * (fahrenheit-32);
// }
// console.log(degreecelsius);
// console.log(fahrenheit);   since local scope is made for it...

const person = {firstname: "divyansh", age: "20"};
person.nationality = "Indian";   //adding new properties to an existing object....
// let age = person.age;
console.log(person.firstname + "is" + person.age + "years old" + "having personality" + person.nationality);

//*****Delete operation in js...
const person2 = {
    fname: "priyanshu",
    lname: "jaiswal",
    age: "20",
    eyecolor: "black",
    nationality: "American"
    
};
delete person2["age"];
console.log(person2);
// console.log(person2.fname + "is" + person2.age + "years old" + "having personality" + person2.nationality);
