// // we will see the use of Math object here......

// console.log(Math.PI);

// console.log(Math.max(1,2,54,6,7,545,5,6));
// console.log(Math.round(2.3));
// console.log(Math.sqrt(100));

// console.log(Math.pow(2,10));


let curr = new Date();
console.log(curr);
let newDate = new Date(2003, 8, 23, 10);  //another way to display the date and timezone current.....
console.log(newDate);

console.log(newDate.getDay());    //to get the which day was on the date being displayed.... 0->sun,1->mon,2->tue,etc...
console.log(newDate.getFullYear());    //to get the full year....

console.log(newDate.setFullYear(2006));
console.log(newDate);