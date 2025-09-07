// garbage collector:- used for memory management and removes memory leaks (lang. like java,javascript).....
// in c++ we manually have to remove the allocated memory...

// error:- is an event that disturbs or pauses the normal flow of execution of the code.....
// types of error:- 1.compile time error  (caught in parsing of the code)
//                  2.run-time error     (caught when executing the error)

//error handling:- 1.try-block(that portion of the code where an error can be detected) catch block(error k sath kya karna chahte hai..)
// 2.finally block:-  
// type-1 error
// console.log1);   //syntax error

// type-2 error

// let x = 10;       //if noe problem then only try is executed here....

// try{
//     console.log("try block shuru hua hai:");    //reference error
//     console.log(x);
//     console.log("try block ends here");
// }
// catch(e) {         //e means error...
// console.log("inside the catch block");
// console.log("your error is here:",e);         //error is printed here....
// }

// finally{
//     console.log("ye block hamesha chalega no matter what:");
//     // console.log(y);
// }

// "throw" is an keyword which can give error as per our need....
try{
    console.log("divyansh")
    console.log(x);
    let error = 100;
    // if(error == 100){
    //     throw new Error("invalid json:");
    // }
}

catch(error){
    throw new Error("first declare then print it:");     //created our own custom error....
    console.log("error 100;");
}