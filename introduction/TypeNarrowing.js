//Type Narrowing is checking the "typeof" before doing any of the operation to the data. This is
// generally done for the better handling of code. 
// Type Narrowing is also said to be Type Guards
// Type Narrowing can be done using TypeOf & InstanceOf
// Type Narrowing using TypeOf 
function Checkval(val) {
    if (typeof (val) === "string") {
        console.log("this is string");
        // .toUpperCase() will only appear in intellisense when we type check(typeof) that the data is string or not
        return val.toUpperCase();
    }
    else {
        console.log("this is number");
        // + 3  will only allow when we type check(typeof) that the data is number or not
        return val + 3;
    }
}
//                         pet is Fish we are type casting it if pet has swim method or not
function IsFish(pet) {
    console.log(pet.swim !== undefined); // true
    // here it will return true or false once we check that the pet type containts Swim method or not
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (IsFish(pet)) {
        pet;
        // console.log(pet.swim());        
        console.log("pet is Fish");
    }
    else {
        console.log("pet is Bird");
    }
}
// getFood({swim:()=>{console.log('Hi from getFood Calling')}}) // 
getFood({ Fly: function () { console.log('Hi from getFood Calling Fly'); } }); // 
