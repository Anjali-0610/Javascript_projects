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