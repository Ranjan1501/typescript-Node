"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// this code should work for string and linklist also make sure that this will work. 
const NumberCollections_1 = require("./NumberCollections");
const CharacterCollection_1 = require("./CharacterCollection");
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
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
// 
const collectionNumber = new NumberCollections_1.NumberCollections([10, -3, 5, 18]);
const sorter = new Sorter(collectionNumber);
sorter.sort();
console.log(collectionNumber.data);
const characterCollection = new CharacterCollection_1.CharacterCollection("abxrabzyw");
const sortString = new Sorter(characterCollection);
sortString.sort();
console.log(characterCollection.data);
