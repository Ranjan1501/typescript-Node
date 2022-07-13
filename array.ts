let carMakers:string[] = ["maruti", "tata", "toyota", "bmw"]; 
let mat: string[][] = [
    ["ranjan", "rohan", "rajeev"],
    ["shweta", "soni", "shivam"],
    ["apple", "banana", "grapes"]

]; 

// type help in map; 
carMakers.map((car: string): string => {
    return car.toLowerCase(); 
    
}); 