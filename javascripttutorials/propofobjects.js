// objects are dynamic in nature....can be changed during runtime.......


// object cloning is done using three methods:-
// 1. spread operator
//2. assign operator
// 3.iteration 


let obj = {         //as a source..
    age:12,
    weight:23,
    height:100
};

// clone is done using spread(...) operator.....
// let obj2 = {
//     name : "divyansh soni:",
//     course : "B.tech cse:"
// };

// let dest = {...obj};         //clone is done using spread(...) operator.....

// assign operator is used to clone source to destination....
// let dest = Object.assign({},obj,obj2);     //both objects are passed here....
// obj.age = 100;


// iteration operator is used here.....
let dest = {};
for(let key in obj){
    let newKey = key;
    let newValue = obj[key];
    
    // newkey aur value ko dest me daal do aur clone banao..
    dest[newKey] = newValue;
}


console.log("src:",obj);
console.log("dest:",dest);