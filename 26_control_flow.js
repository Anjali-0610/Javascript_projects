//if
if(true){
    //== without datatype consideration
    //=== with datatype consideration
}
else{
}


//to write two statements within if in shorthand form
if(true) console.log("first line"),console.log("second line within if");

//else-if
if(true){
}
else if(1===1){
}


//logical and or
const u=true
const v=true
if((u&&v)||2==3)
{
}

//switch case
//in this strings can also be matched 
const month=2
switch(month){
    case 1:
        console.log("january")
        break
    case 2:
        console.log("feb")
        break
    default:
        console.log("none of the above")
}


//falsy value
// false,0,-0,BigInt 0n,null,undefined,NaN,null
//truthy values
//[],{},function(){}

//to check empty array
let user=""
if(user.length===0)
{
    console.log("empty array")
}

//to check empty object
let usern_obj={}
if(Object.keys(usern_obj).length===0)
{
    console.log("empty object")
}


/*--------NULLISH COALESCING OPERATOR (??): null undefined*/
/*----------esliye use hota hai jab agar error aaye aur koi aur bhi value aaye,,,, to value choose ho na ki null*/
let val1
val1=5??10
console.log(val1)
val1=null??10
console.log(val1)
val1=undefined??15
console.log(val1)


//ternary operator
let user_1=20
user_1>10?console.log("greater"):console.log("less")