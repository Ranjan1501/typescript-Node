interface Vehicle {
    name: string;
    year: number;
    broken: boolean; 
}
const oldCivic = {
    name: "civic",
    year:2000,
    broken: true
    
};

// const printCivic = (vehicle: {name:string, year:number, broken: boolean}):void=> {
    
// }

// or 

const printCivic = (vehicle: Vehicle): void => {
    console.log(vehicle.name); 
    console.log(vehicle.year); 
};
printCivic(oldCivic); 