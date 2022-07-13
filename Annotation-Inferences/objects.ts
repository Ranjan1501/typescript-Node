let profile = {
    personName: "Ranjan",
    age: 27,
    coords: {
        lat: 20,
        long: 30,
    },
    setAge (age: number): void {
        this.age = age; 

    }
};

// destructuring the all the properties
const { age, personName }: { age: number; personName: string; } = profile; 
console.log(age)
console.log(personName)
// destructuring same way the way it is defined in the object. 
const { coords: { long, lat } }: { coords: { long: number; lat: number; }; } = profile; 
console.log(lat); 
console.log(long); 