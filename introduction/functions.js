"use strict";
// Note : while writing functions we need to pass parameters and their datatype to it
// otherwise bydefault typescript will consider parameters as "any" dataType which can
// give error when used wrong.
// check below example
Object.defineProperty(exports, "__esModule", { value: true });
// wrong way to declare function in typescript
// function UserSignUp(name,email,phone)
// {
//     console.log(name);
//     console.log(email);
//     console.log(phone);
// }
//correct way to write functions in type script
// here void is used because the function does not return any value
// if we want function to return value we need to specify dataType accordingly.
// function UserSignUp(name:string,email:string,phone:number):void
// {
//     console.log(name);
//     console.log(email);
//     console.log(phone);
// }
// UserSignUp('david','david@shah.com',44898378387378)
function handleError(message) {
    throw new Error(message);
}
handleError('hi from eror log');
