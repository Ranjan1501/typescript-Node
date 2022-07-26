export class NumberCollections {
    constructor(public data:number[])  {
    
    }

    // now length is getter at the time of invocation, directly write data.length not data.length(); 
   get length (): number{
        return this.data.length; 
    }
    compare ( left: number, right: number ): boolean {
        return this.data[ left ] > this.data[ right ];
    }
    swap(left:number, right:number):void{
        [ this.data[left], this.data[right] ] = [this.data[right], this.data[left]];
    }
}
const data= new NumberCollections([3,6,8,10,808]); 
console.log( data.length ); 
console.log("End Gettter"); 