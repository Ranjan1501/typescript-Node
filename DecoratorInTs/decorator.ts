    //  @testDecorator

class Boat {
    //  @testDecorator
@logError
    color: string = "black"
    //  @testDecorator
    getColor ():string {
        return `Boat Color is ${this.color} `;
    }
    //  @testDecorator
        // uncomment   "experimentalDecorators": true,        /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,  to use experimental support for decorators
     pilot (): void {
         throw new Error(); 
        console.log( "Swiss" ); 
    }
}

function logError ( target: any, key: string ) {
    console.log( "Target: ", target.color ); 
    console.log( "Key: " , key );   
}
// this function acts as decorator factories 
function testDecorator (errorMessage: string) {

return function ( target: any, key: string, desc: PropertyDescriptor ): void {
    //console.log( "Target :", target );  // target is Boat Class
   // console.log( "Key :", key ); // key will point to functin or variables or methods above which it used to.
    
    const method = desc.value; 
    desc.value = function () {
        try {
            method(); 
        }
        catch (e) {
            console.log( errorMessage ); 
        }

    }
}
}
// we can invoke decorators here, this way also. 
// testDecorator( Boat.prototype, "pilot" );
// new Boat().pilot(); 