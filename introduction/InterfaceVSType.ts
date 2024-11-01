// both interface and type can be used to define the shape of an object,
// but they have some differences in terms of features and use cases. 

// Interface: Primarily used to define the shape of objects and classes.
// Type Alias: Can represent any valid TypeScript type, including primitives, unions, intersections, and more.

//Interface Syntax
// interface Person {
//     name: string;
//     age: number;
// }

// Type Syntax
// type Person = {
//     name: string;
//     age: number;
// };


// Interface can be extended.
interface Person {
    name: string;
}

interface Person {
    age: number;
}

// Merged interface
const person: Person = {
    name: "Alice",
    age: 30,
};

// Interface: Can be extended using the extends keyword.
interface Employee extends Person {
    position: string;
}

// Type Alias: Can use intersection types (&) to combine types.
type Employee1 = Person & {
    position: string;
};


export {}

