//...is called rest as well as separte operate depending upon the usecase

function calculate_price0(num1){
    return num1
}
function calculate_price(...num1){
     return num1
}
function calculate_price2(val1,val2,...num2){
    return num2                                        //num2 will consist of all the values except those of 1st and 2nd 
}
console.log(calculate_price0(200,400,500))
console.log(calculate_price(200,400,500))
console.log(calculate_price2(200,400,500,600,700))




//objects passing in functions
function objecthandler(anyObj)
{
    console.log(`${anyObj.username}  is the user whose total bill is ${anyObj.price}`)
}
const user={
    username:"anjali",
    price:"3999"
}
objecthandler(user)
objecthandler({username:"akshita",     //another method to pass object
    price:"4999"
})


//array passing in function
const mynew_arr=[200,300,400]
function return_second(getarray){
    console.log(getarray[1]) 
}

return_second(mynew_arr)
return_second([200,700,400])