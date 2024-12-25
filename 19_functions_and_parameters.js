function myfunc1(){
      console.log("hello lets learn functions")
      console.log("two sentences inside function")
}

//myfunc1 ->refrence     ->will not give any output
//myfunc1() ->execution

function add(num1,num2)
{
      console.log(num1+num2)
}

add()               //NaN as no arguments were passed
add(3,4)            //7
add(3,"4")          //34
add(3,null)         //3

//values passed during calling are actual values and called as ARGUMENTS
// while the copy of that values written in the defination are PARAMETERS here num1,num2 was parameters

function multi(num1,num2){
      return num1*num2
}
const res1=add(3,4)
const res2=multi(3,4)
console.log(res1,"    ",res2)



//another example
function loginwelcome(username="new user"){
      return username+" just logged in"
}

console.log(loginwelcome("anjali"))
console.log(loginwelcome())          //if no default values is set than undefined will come in place of username if nothing is passed