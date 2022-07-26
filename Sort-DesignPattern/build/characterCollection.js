"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
class CharacterCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(left, right) {
        return this.data[left].toLocaleLowerCase() > this.data[right].toLocaleLowerCase();
    }
    swap(left, right) {
        const characterArray = this.data.split("");
        [characterArray[left], characterArray[right]] = [characterArray[right], characterArray[left]];
        this.data = characterArray.join("");
    }
}
exports.CharacterCollection = CharacterCollection;
