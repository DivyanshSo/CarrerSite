// // allows the usage of functions with default value.....(predecided)

// function printname(myname = "Divyansh Soni:"){       //this is set if no value is passed then this will run by default..
//     console.log("my name is:", myname);
// }

// printname("Priyanshu Jaiswal");

// function solve(value = {age:20,weight:90, height:100}){        //object is defined for the deafult case......
//     console.log("hello jee:", value);
// }
// solve();

function getage(){
    return 21;
}

function utility(name = "priyanshu",age = getage()){          //function (by calling)is used to get the age....
    console.log(name," ", age);
}

utility();    //if no value is passed then then, above values are displayed here.....