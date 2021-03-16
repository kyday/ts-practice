"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let count = 0;
count += 1;
const message = "hello world";
const done = false;
const numbers = [1, 2, 3];
const messages = ["hello", "world"];
let mightBeUndefined = undefined;
let nullableNumber = null;
let color = "red";
color = "yellow";
//function
function sum(x, y) {
    return x + y;
}
const result = sum(1, 2);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]); //15
