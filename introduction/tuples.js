"use strict";
// Tuples are a special type of array that allow you to define an array with a fixed number of elements,
// where each element can have a different type. This is useful for representing structured data that has
// a known number of components.
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1 : Tuple
// here the length og the tuple is also 2 because in tuple when using throgh let the definition and data type are fixed.
// so we we try to add more than 2 values in tuple than it will throw error.
var tuple;
tuple = ["Alice", 30]; // Valid
var consumeTuple = ['test1', 30, true,];
// let consumeTuple2:Tuple2 = ['test1',30,true,"test2",31,false]
consumeTuple.push('test2');
console.log(consumeTuple);
