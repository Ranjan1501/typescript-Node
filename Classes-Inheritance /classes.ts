// Instance Method Modifier  
// private public protected
class Vehicle {
 
    constructor (public color: string) {
        // note modifier can be used for variables also like color property
        
    }

   protected honk (): void {
        console.log("No honk please!");
    } 
}
const vehicle = new Vehicle("yellow" );
console.log(vehicle.color); 

// Public -- it can  called anywhere anytime you want. 
// Private -- it can be called by other methods in this class. 
// protected -- This method can be called by other methods in this class or other methods in child classes. 
class Car extends Vehicle {
    // this is a way to initialize a variable inside the class. 
    constructor (public wheels: number, color: string) {
        super(color); 
    }
    private drive (): void {
            console.log("vroom")
    }
    startDrivingProcess (): void {
        this.drive(); 
        this.honk(); 
        // it can be accessed by other methods in this class or in child classes. 
    }


}
const car = new Car(4, "grey");
car.startDrivingProcess(); 
console.log(car.color); 
console.log(car.wheels)