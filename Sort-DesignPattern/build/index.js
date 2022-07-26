"use strict";
// this code should work for string and linklist also make sure that this will work. 
class Sorter {
    // collection: number[]
    constructor(collection) {
        this.collection = collection;
        // this.collection = collection; 
        // note when we use method modifier then there is no need to define variable. 
    }
    sort() {
        console.log("Start Sorting");
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection instanceof Array) {
                    // this.collection.
                    // this.collection = number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        [this.collection[j], this.collection[j + 1]] = [this.collection[j + 1], this.collection[j]];
                    }
                }
                if (typeof this.collection === "string") {
                    // this.collection.
                }
            }
        }
    }
}
const sorter = new Sorter([10, -3, 5, 18]);
sorter.sort();
console.log(sorter.collection);
