// Union Types combines multiple dataTypes using pipe (|) symbol.
// we use Union in case when we are not sure about the data which will be assigned to variable

// Example of Union Type

let value:string | number ;
value=2;
value="2";


// Example of Union Types using Functions

type User=
{
    name:string,
    type:string
}

type Admin={
    username:string,
    type:string
}

// here either "ReqPayload" can have User or Admin Type Check.
let ReqPayload: User | Admin={
    name:'',
    type:'',
    username:''
}


// Union Type with array

let StringArray : string[] = ["1","2","3","4"]
let NumArray : number[] = [1,2,3,4]

// In below example "EitherArray" can either have string array or Number array but both the array Combined will give error.
let EitherArray : string[] | Number[] = [1,2,3] 

// In below example "MixArray" can have string, Number, boolean array together combined. 
let MixArray : (string | number | boolean)[] = [1,2,"3",true,"4",5,false,"6"]



// Important Note : Suppose in an system if we want that the values of the variable can be choosed from the fixed values which we 
// defined then we can achieve this using below example
// here the value of CardType can be set any of the values provided below if we try to set the value outside the mentioned values
// then "CardType" will give error.
let CardType: "Master Card" | "Visa" | "American Express";

CardType = "American Express";
CardType = "Rupay"; //// this will give error because we have set the value of "CardType" outside the values we are pre-defined.