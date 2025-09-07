// jsdom manipulation:- window object is the global object(created by the browser...contains DOM,BOM,JScore)

// Dom:- document-object model, actually it is:- htmlcode-> jsobject-> document....
// Bom:- browser object model..

// .....below three are used to access element....
// document.getElementById("fpara");
// document.getElementsByClassName("fpara");
// document.getElementsByTagName("fpara");

// document.querySelector('p');
// document.querySelectorAll('p');  //displays all classes....
//  $0 method can also be used..


// .......to update existing element....
// button.innerHTML used to show tags in any object

// let element = document.querySelector('#fdiv');
// element.textContent;  //tells what is inside the code..
// element.innerText;   // shows exact what is the syntax 

// to add an element...
// createelement to create an Element and appendchild(), it adds new child at the last...

//to add child at decided position:- insertAdjacentHTML() used...
// position- beforebegin, afterbegin, beforeend, afterend

// let mydiv = document.querySelector('#mydiv');
// let newElement = document.createElement('span');
// newElement.textContent = "Divyansh Soni:";
// mydiv.insertAdjacentElement('beforebegin',newElement);


// Removal of child:- removechild()...opposite of append
// let parent = document.querySelector('#mydiv');
// let child = document.querySelector('#pehliline');
// parent.removeChild(child);


// Browser events:-
// events(click,double-click,key press,scroll)
// event target(entity where event is recieved)
// event listener(tells what action to perform)
// one is addeventlistener() and other is removeeventlistener()

// function changeText(){
//     let mydiv = document.getElementById('mydiv');
//     mydiv.textContent = "Divyansh";
// }

// let mydiv = document.getElementById('mydiv');
// mydiv.addEventListener('click',changeText);

// to remove the event:-
// mydiv.removeEventListener('click',changeText);

//Event Object:- any event is trigerred then eventobject is given to listener(you can access it)...
// Default action:- e.g. anchor tag-> any link is there,


//  let anchorelement = document.getElementById('anchor');
//  anchorelement.addEventListener('click',function(event){
    //  event.preventDefault();
    //  anchorelement.textContent = "click is done...";
//  });

// Avoiding to many listeners:-
// let paras = document.querySelectorAll('p');

// function alertpara(event){
//     if(event.target.nodename === "SPAN"){
//          alert("you clicked on span..." + event.target.textContent);         //show which span is clicked
//     }
//      // alert("you clicked on paragraph..." + event.target.textcontent);         show which para is clicked
// }
// for(let i=0;i<paras.length;i++){
//     let para = paras[i];
//     paras.addEventListener('click',alertpara);
// }

// Performance Measurement:-
// const t1 = performance.now();   // start time
// for(let i = 0;i<=10;i++){
//     console.log(i);
// }
// const t2 = performance.now();  // end time
// console.log("time taken to execute is:", (t2-t1));

// best code
// let fragment = document.createDocumentFragment();   //fragment gets created

// for(let i = 0;i<=10;i++){
//     let para = document.createElement('p');
//     para.textContent = "this is para:" + i;
//     fragment.appendChild(para);    //append to fragment
// }

// document.body.appendChild(fragment);   //body me add ho gaya..

// promise :- type of an object which is used to do asynchronous programming...
// if fulfilled then,catch resolve() is called and if not then reject() is called...finally in last



// let firstpromise = new Promise((resolve, reject) => {
//     setTimeout(function sayname() {
//         console.log("my name is divyansh soni:");
//     },1000);  //1 second delay...
//     return 1;
// });

// let firstpromise = new Promise((resolve, reject) =>{    //synchronous code
//     console.log("divyansh soni:");
//     reject(new Error("server error:"));

// });

// async await:- it is used to make the code synchronous from asynchronous...
// always return a promise...
// async function getdata(){
//     setTimeout(function(){
//         console.log("im inside timeout block...");
//     },3000)  //gives 3sec delay..
// }
// getdata(); 

// fetch API:- it is used to fetch data from the server...fromjsonplaceholder.com
// async function getdata(){
//     let response =await fetch('https://jsonplaceholder.typicode.com/comments');  //fetch data from the server..
//     console.log(response);
//     let data = await response.json();  //convert in json format..
//     console.log(data);
// }
// getdata();

// const myHeaders = new Headers(); 
// myHeaders.append("content-type", "application/json");  //header is created;

// const url = "https://jsonplaceholder.typicode.com/posts";  //url is created;

// const options = {
//     method: "POST",
//     body: JSON.stringify({ username: "divyansh soni"}),
//     Headers: myHeaders,
//     redirect: "follow",
// };

// async function getdata(){
//     const url = "https://jsonplaceholder.typicode.com/posts/1"
//     const response = await fetch(url);  //fetch data from the server..
//     let data = await response.json();  //convert in json format..
//     console.log("get data response:", data);
// }

// async function postdata(){
//     const response = await fetch(url, options);  //fetch data from the server..
//     let data = await response.json();  //convert in json format..
//     console.log("my data is:", data);
// }

// async function processdata(){
//     await getdata();  //get data from the server..
//     await postdata();  //post data to the server..
//     console.log("data is posted successfully...");
// }
// processdata();


// Closure:- combination of function and lexical environment(required data)...
let name = "priyanshu jaiswal";  //global variable..
function init(){
    // let name = "Mozilla";  //local variable..
    function displayname(){  //inner/closure function..
        // let name = "archit saxena";  //printed since its local
        console.log(name);
    }
    displayname();
}
init();  
