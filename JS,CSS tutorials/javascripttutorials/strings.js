//creation of strings......
// 1.
// let firstname = "divyansh";
// console.log(typeof(firstname));

// 2.``can be used to create a string in js.
// let name = `divyansh
// soni...`
// console.log(name);

//3. new String is used ....
// let firstname = new String("Ayush Jaiswal.");
// console.log(firstname);

//concatenation..
// let op1 = "Bharat mata";
// let op2 = "ki jaya";
// let ans = op1 + op2;
// console.log(ans);

//conersion to uppercase.
//let l = "FRench";
// let v = "spanish";
// console.log(l.toLowerCase());
// console.log(v.toUpperCase());
// console.log(l.length);

//specific part of a string is used here...
let str = "Divyansh Soni";
console.log(str.substring(3,7));    //index 3 to 7 are printed here....

//splitting any string words are counted ...
let sentence = "namaste jii...kaise ho sarre:";
let words = sentence.split(' ');
console.log(words);
console.log(words.join(',\n'));
