"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollections = void 0;
class NumberCollections {
    constructor(data) {
        this.data = data;
    }
    // now length is getter at the time of invocation, directly write data.length not data.length(); 
    get length() {
        return this.data.length;
    }
    compare(left, right) {
        return this.data[left] > this.data[right];
    }
    swap(left, right) {
        [this.data[left], this.data[right]] = [this.data[right], this.data[left]];
    }
}
exports.NumberCollections = NumberCollections;
const data = new NumberCollections([3, 6, 8, 10, 808]);
console.log(data.length);
console.log("End Gettter");
