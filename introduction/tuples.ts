// Tuples are a special type of array that allow you to define an array with a fixed number of elements,
// where each element can have a different type. This is useful for representing structured data that has
// a known number of components.


// Example 1 : Tuple
// here the length og the tuple is also 2 because in tuple when using throgh let the definition and data type are fixed.
// so we we try to add more than 2 values in tuple than it will throw error.
let tuple: [string, number];
tuple = ["Alice", 30]; // Valid
// tuple = ["Alice", 30,"tuple"]; // Error


// Example 2
type Tuple2 = [ string, number,boolean ]
let consumeTuple:Tuple2 = ['test1',30,true,]
// let consumeTuple2:Tuple2 = ['test1',30,true,"test2",31,false] // Error

// here there is an loop hole in tuple we can push the values in tuple using "push" method and there is no error in  "consumeTuple"
// even if the length of the "consumeTuple" is exceeded.
consumeTuple.push('test2')

console.log(consumeTuple);


export {}