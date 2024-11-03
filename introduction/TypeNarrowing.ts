//Type Narrowing is checking the "typeof" before doing any of the operation to the data. This is
// generally done for the better handling of code. 

// Type Narrowing is also said to be Type Guards

// Type Narrowing can be done using TypeOf & InstanceOf

// Type Narrowing using TypeOf 

function Checkval(val:string|number): string|number
{
        if(typeof(val)==="string")
        {
            console.log("this is string")
            // .toUpperCase() will only appear in intellisense when we type check(typeof) that the data is string or not
            return val.toUpperCase();
        }    
        else
        {
            console.log("this is number")
            // + 3  will only allow when we type check(typeof) that the data is number or not
            return val + 3 ;
        }
}


type Fish = {swim:() => void}
type Bird = {Fly:() => void}

//                         pet is Fish we are type casting it if pet has swim method or not and will return Fish type if swim method
//                         method is present or not, if not it will return Bird Type
function IsFish(pet:Fish|Bird):pet is Fish{        
    console.log((pet as Fish).swim !== undefined );    // true
    // here it will return true or false once we check that the pet type containts Swim method or not
    return (pet as Fish).swim !== undefined 
}

function getFood(pet : Fish|Bird)
{    
    if(IsFish(pet))
    {
        pet
        // console.log(pet.swim());        
        console.log("pet is Fish");
    }
    else
    {
        console.log("pet is Bird");
    }
}

// getFood({swim:()=>{console.log('Hi from getFood Calling')}}) // 
getFood({Fly:()=>{console.log('Hi from getFood Calling Fly')}}) // 