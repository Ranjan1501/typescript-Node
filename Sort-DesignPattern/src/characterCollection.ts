export class CharacterCollection{
    constructor (public data: string) {
    
    }
    get length():number {
        return this.data.length; 
    }
    compare ( left: number, right: number ):boolean {
        return this.data[left].toLocaleLowerCase() > this.data[right].toLocaleLowerCase() 
    }
    swap ( left: number, right: number ): void {
        const characterArray = this.data.split( "" ); 
        [ characterArray[ left ], characterArray[ right ] ] = [ characterArray[ right ], characterArray[ left ] ]; 
    
        this.data= characterArray.join(""); 
    }
}