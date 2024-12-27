//this keyword is used to refer to current context

const user={
    username:"anjali",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)               //
    }
}
user.welcomemessage     //->will not give anything as it is just reference
user.welcomemessage()
user.username="sam"
user.welcomemessage()


//the below line will give an empty paranthesis and when it is written in browser it will give the
//output as "window" because initally the engine used for running js was only found in browser but now we 
//have standalone engines like dino and node.
//and the global object in browser is window but in case of node it is empty
console.log(this)

//this keyword does not work inside function
function one(){
    let username="anjali"
    console.log(this.username)         //->will not work and igve undefined output
    console.log(this)
}
   
one()


//++++++++++++++++++++++++++++++++Arrow function+++++++++++++++++//
const two0=function(){
    let username="anjali"
    console.log(this.username)
    console.log(this)
}
two0()

const two=()=>{
    let username="anjali"
    console.log(this.username)
    console.log(this)               //will give empty paraenthesis and this is the diff between arraow function and normal function
    console.log("--------------------------")
}
two()

const addTwo=(n1,n2)=>{
    return n1+n2
}

//implict return mein curly bracket{} use nahi hota hai esliye return keyword ke bina bhi return ho jayega
const multiTwo=(num1,num2)=> num1*num2
const multiTwo1=(num1,num2)=> (num1*num2)
const multithree=(n1,n2)=>{n1}
console.log(multithree())         //undefined kyunki curly bracket ke andar return nahi ho sakta


//to return object we will need to enclose it within parenthesis()
const obj=()=>({username:"anjali"})
console.log(obj())