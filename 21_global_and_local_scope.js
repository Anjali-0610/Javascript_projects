// {} scope when used with if/else or function
// when used within scope is called local scope or block scope 
// while outside that is called global scope
//global value can be used inside local scope but not local inside global


var c=300
if(true){
    // let a=10
    var c=30
}
// console.log(a)      will give error as let and const has local scope
console.log(c)


let one=20
if(1)
{
    let one=40
    console.log("inside value ",one)
}
console.log("outside value ",one)