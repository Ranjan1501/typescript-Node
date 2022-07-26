class Base {
    k:number= 4000 ; 
}

class Derived extends Base {
    constructor () {
        // console.log("Before Super"); 
        // console.log(this.k); 

        super(); 
        console.log( this.k ); 
        // console.log("After Super"); 
    }
        // console.log("After Base"); 

}
const derived = new Derived(); 

// console.log( derived ); 
// console.log( derived.k ); 
