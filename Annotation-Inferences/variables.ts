let apples; 
apples= "apple";
console.log(typeof apples);
// built in object 
let now: Date = new Date();
console.log(typeof now)

const speed = "fast"; 
const hasName: string= "Ranjan"; 
const hasStatus:boolean = true; 

// annotation  for string of array

let colors: string[] = ["red", "green", "yellow", "blue", "alpha", "alpha", "alpha"];
console.log(typeof colors);  

// annotation for integer array

let numberArray: number[] = [0, 1, 2, 3, 4]; 
console.log(typeof numberArray); 

let mixedArray: any[] = ["red", "green", "blue", true, false, 5, 7, 87]; 
console.log(typeof mixedArray); 

// Class

// class Car{
//     model: number;
//     ManfauringYear: number; 
//      name: string
// }
// let car: Car = new Car(); 


//Object Literals

let point: {x: number, y: number, name: string[], add:{city: string, District: string,Pin:number}}    = {
    x: 10,
    y: 20,
    name: ["Ranjan", "John", "Jim"],
    add: {
        city: "Bangalore",
        District: "Bangalore Urban",
        Pin: 560017
    }
};
console.log(point); 

// function annotation
// funtions should have the following properties
// 1. type function parameter
// 2. function description which type of arguement function should have 
// 3. return tuype of the function 
// if nothing to return it should have void type 

const doubleNumber:(num:number)=> void= (num:number) => {

    console.log(num * 2); 
    
};

// note every thing after == means the function actual function before == means function  annotation


// working with Json string 
// Write Json inside string will turn it into a JSON string
const json = '{ "x": 20, "y": 20, "z": 20 }'; 
const cordinates = JSON.parse(json);
console.log(cordinates); 

//Note-  json.parse rerturn the values of any type 


// variables whose type cannot be inferred correctly
let numbers = [10, 91, -1, 12]; 
let numberAboveZeros: boolean | number = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZeros = numbers[i]; 
        console.log(numberAboveZeros);
    }
    
}
// console.log(numberAboveZeros);