//interfaces are powerful constructs that allow you to define the shape of objects
// including their properties and methods. They provide a way to define contracts within your
// code and are crucial for type-checking and ensuring that certain structures are adhered to.


// Example of Interface
interface Person {
    name: string;
    age: number;
    FaceStructure():string // FaceStructure() is function & "string" is the return type of function
}

let user:Person = {name:'david',age:2,
    FaceStructure:() => { return ''},height:'6',weight:'72'
}


// re-opening the interface

interface Person
{
    height:string,
    weight:string
}


let user1:Person = {name:'david',age:2,
    FaceStructure:() => { return ''},height:'6',weight:'72'
}


export {}