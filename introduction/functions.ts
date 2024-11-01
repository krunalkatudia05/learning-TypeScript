// Note : while writing functions we need to pass parameters and their datatype to it
// otherwise bydefault typescript will consider parameters as "any" dataType which can
// give error when used wrong.
// check below example

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


// here we have used "never" keyword which means that function will never successfully
// complete it's end point. It tells the TypeScript Compiler that this functions will
// not return.
// never is generally used to throw errors
// function handleError(message: string):never
// {
//     throw new Error(message);
// }

// handleError('hi from eror log');

// export {}