// --------------------- Type Alias -----------------------------------------
// Type aliases in TypeScript allow you to create a new name for an existing type.
// This can help simplify complex type definitions, improve readability, and provide 
// more meaningful names for types used in your application.

//Example
// type StringOrNumber = string | number;

// let value: StringOrNumber;
// value = "Hello";  // Valid
// value = 42;       // Valid


//this is an example of Type Alias
type UserDetails=
{
    name:string,
    username:string,
    password:string,
    Country:string
}
//                                       this is return type and parameters specified
function DisplayUserDetails(UD : UserDetails):UserDetails
{
  return UD
}

let Uservalue={
    name:'david',
    username:'david@101',
    password:'Pass@1234',
    Country:'In'    
}
DisplayUserDetails(Uservalue)

//this is an example of Type Alias End
export {}