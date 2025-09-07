// function hoisting:- where the function is placed at the top by default, when compilation is done..
// Variable hoisting:- but in case of variable, value is not shifted above only the declaration is shifted above....

// function Myname(realname){   //realname is the parameter is passed here....
//     console.log(realname);
// }

// Myname("divyansh soni:");

// console.log(age);     //cannot use before initialization....either const,let
// const age = 25;

//class hoisting is checked here...which is also not possible...
// const object1 = new Human();
// class Human {

// }


//function call stack:- function call is done using stack here to know order of execution...
// function greetme(greet, fullname){
//     console.log("hello",fullname);
//     greet();
// } 

// function greet(){
//     console.log("greeting for the day:");
// }
// greetme(greet,"It's divyansh here.." );

function solve(number){
    return function(number){
        return number*number;
    }
}

let ans = solve(5);
let finalAns = ans(10);
console.log(finalAns);
