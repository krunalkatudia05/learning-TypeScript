// Generics in TypeScript allow you to create reusable components that can work
// with any data type while maintaining type(int, string,boolean etc) safety.

//They enable you to define functions, interfaces, and classes that can operate on different types without
// losing information about what those types are.


// here since we have defined "identity" function as Genertic(Type) then we can pass any dataType(string, boolean, number etc)
function identity<Type>(val: Type): Type
{
    
    return val
}
const storeGenricExample1 = identity(42); // here the output will be 42
const storeGenricExample2 = identity("hello from generic"); // here the output will be "hello from generic"

// we can also achieve above functionality using "any" keyword but the dataType can be vary when we pass parameter,
// return parameter as any.
// check the example below

// here even if we pass the value as number in "val" parameter in "identity1" function. we can return string as output
// when we use generic type we can restric such behaviour. we can lock the function defintion by setting input, return 
// as an single Type(string, boolean, number etc)
function identity1(val: any): any
{
    
    return val+"hi"
}
const storeAnyExample1 = identity(42); // here the output will be "42hi"
const storeAnyExample2 = identity("hello from generic"); // here the output will be "hello from generichi"


// Generic With InterFace
interface Book<T>
{
    content:T
} 

const interfaceEx1: Book<string>= {content:"123"} // 123
const interfaceEx2: Book<number>= {content : 123} // 123


class BookAgain<T>
{
    content : T
}
const classEx1: BookAgain<number>= {content : 123} // 123
const classEx2: BookAgain<string>= {content : "hi again"} // 123

console.log(classEx1.content);
console.log(classEx2.content);


// generics with arrow functions

const nameArrorFn = <Type>(val : Type):Type =>{
    return val
}

// generics with arrow functions
// here even an new syntax is used that is <Type,> this also means generic and <Type> this also means generic.
const nameArrorFnArray = <Type,>(val : Array<Type>):Array<Type> =>{
    return val
}
