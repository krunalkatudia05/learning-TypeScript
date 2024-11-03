// Generics in TypeScript allow you to create reusable components that can work
// with any data type while maintaining type(int, string,boolean etc) safety.
//They enable you to define functions, interfaces, and classes that can operate on different types without
// losing information about what those types are.
// here since we have defined "identity" function as Genertic(Type) then we can pass any dataType(string, boolean, number etc)
function identity(val) {
    return val;
}
var storeGenricExample1 = identity(42); // here the output will be 42
var storeGenricExample2 = identity("hello from generic"); // here the output will be "hello from generic"
// we can also achieve above functionality using "any" keyword but the dataType can be vary when we pass parameter,
// return parameter as any.
// check the example below
// here even if we pass the value as number in "val" parameter in "identity1" function. we can return string as output
// when we use generic type we can restric such behaviour. we can lock the function defintion by setting input, return 
// as an single Type(string, boolean, number etc)
function identity1(val) {
    return val + "hi";
}
var storeAnyExample1 = identity(42); // here the output will be "42hi"
var storeAnyExample2 = identity("hello from generic"); // here the output will be "hello from generichi"
var interfaceEx1 = { content: "123" }; // 123
var interfaceEx2 = { content: 123 }; // 123
var BookAgain = /** @class */ (function () {
    function BookAgain() {
    }
    return BookAgain;
}());
var classEx1 = { content: 123 }; // 123
var classEx2 = { content: "hi again" }; // 123
console.log(classEx1.content);
console.log(classEx2.content);
// generics with arrow functions
var nameArrorFn = function (val) {
    return val;
};
// generics with arrow functions
var nameArrorFnArray = function (val) {
    return val;
};
