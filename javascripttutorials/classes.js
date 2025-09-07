// class has properties and behaviour......instance of an object..
class Human{
    //properties...
    age = 21;  //public (for everyone..)
    #weight = 62;  //private to mark any variable as private use "#"...
    height = 172;

    // constructors are used to give data to variable outside the class.....
    constructor(newage, newheight, newweight){
        this.age = newage;
        this.height = newheight;
        this.#weight = newweight;
    }
    //behaviour...
    // functions can also be made private using #symbol as in case of variables.... 
    walking(){ 
        console.log("I am walking:", this.#weight);
    }

    get fetchWeight(){
        return this.#weight;
    }

    set modifyWeight(val){
        this.#weight = val;

    }
}

let obj = new Human(50, 190, 101);   
console.log(obj.age);  //object is created here......
// console.log(obj.weight); //undefined because it's private...
console.log(obj.height);
obj.walking();    //function is called here.....with updated weight..



// getters and setters are used to get data from private variable....outside the class
console.log(obj.fetchWeight);     //getter is called here to fetch private data.....