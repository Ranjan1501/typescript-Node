class Vehicle {
    drive (): void {
        console.log("Hey I am Ranjan");
    }
    honk (): void {
        console.log("No honk please!");
    } 
}
const vehicle = new Vehicle();
vehicle.honk(); 
vehicle.drive();