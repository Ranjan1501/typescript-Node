// 1.  way to write functions with inference  
// easiest way to write functions
const add = (a: number, b: number): number => {
    return a + b; 
};
console.log(add(6, 20));

// 2 way to write functions with inference  
const addNumber: (a: number, b: number) => number = (a: number, b: number) => {
    return a + b; 
    
};
console.log(addNumber(6, 20));

// void return type 

const logger = (message: string): void => {
    console.log(message); 
}

// it will never going to reach the  end  of the functions So never going to exceiute the functions completely at some point of time inside of here. it will going to throw an error and exit the functions early without returning any value  so it has never type. 
const throwErrror = (message: string): never => {
    throw new Error(message);
    
};


// getting data from object

const todayWheather = {
    date: new Date(),
    wheather: "cloudy"
}

// const logWheather = (forcast: { date: Date, wheather: string; }) => {
//     console.log(forcast.date.toString()); 
//     console.log(forcast.wheather);
    
// }

// logWheather(todayWheather); 


// With Destructuring 
// only replace forcast object with key feild which you want to destructure from the object
const logWheather = ({ date, wheather }: { date: Date, wheather: string; }) => {
    console.log(date.toString()); 
    console.log(wheather);
}

logWheather(todayWheather); 

// interfaces in function 

interface Reportable{
    summary(): string;
}

const oldCivic = {
    name: "civic",
    year: new Date(),
    broken: false,
    summary (): string {
        return `Name is ${this.name} and year is ${this.year}`;
    }
}; 

const printSummary = (item: Reportable):void => {
    console.log(item.summary()); 
}

printSummary(oldCivic); 