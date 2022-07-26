// this code should work for string and linklist also make sure that this will work. 
import { NumberCollections } from "./NumberCollections"; 
import { CharacterCollection } from "./CharacterCollection";
// only thing is define data, compare and swap method
interface Sortable{
    length: number; 
    compare(left: number, right: number): boolean; 
    swap ( left: number, right: number ): void; 
}

export class Sorter{
    // collection: number[]
    constructor (public  collection: Sortable) {
        // this.collection = collection; 
        // note when we use method modifier then there is no need to define variable. 
    }
    sort(): void {
        console.log( "Start Sorting" ); 
        const {length}= this.collection; 
        for ( let i = 0; i < length; i++ ) {
            for ( let j = 0; j < length - i - 1; j++ ) {
               
                if ( this.collection.compare( j, j+1 ) ) {
                    this.collection.swap( j, j+1 );
                }
                 
            }
        }
        }
}
// 
const collectionNumber = new NumberCollections( [ 10, -3, 5, 18 ] );
const sorter = new Sorter( collectionNumber ); 
sorter.sort(); 
console.log( collectionNumber.data ); 
const characterCollection= new CharacterCollection("abxrabzyw"); 
const sortString = new Sorter( characterCollection ); 
sortString.sort(); 
console.log( characterCollection.data ); 