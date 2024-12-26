//closure in function
function one(){
    const username="anjali"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website)      ->can't be accessed
    two() //-> function declared inside function need to be called inside function atleast once for execution
}
one()

//scope concept for if-else
if(true){
    const username="akshita"
    if(username==="akshita"){
        const website="youtube2"
        console.log(username+website)
    }
    // console.log(website)    //will give error
}
// console.log(username)       //will give error


/*-----------------------interesting-------------------- */
function addone(num){
    return num+1
}
addone(5)

addtwo(7)       // ->will give error
const addtwo=function(num){
    return num+2
}
addtwo(6)               //this is also a method used for function and also called as expression

//while using only function and not storing in varaible calling can be before function declartion but not in case 
//of expression here function calling should be after declartion/initalization