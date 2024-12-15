/*stack and heap memory*

stack is used for primitive data types
in stack the copy of the variable is given 

heap is used by non-primitve data types
in non-primitive types the refernce is been given */


let a="anjali"
let b=a
console.log(b)
b="new name"
console.log(b)
console.log(a)     //here the value of a remains unchanged as copy of it was given


let user1={email:"anjali@gmail.com",
    upi:"741@ibl"
}

let user2=user1
user2.email="akki@gmail.com"
console.log(user1.email)      //both are referencing to same memory location thus value is changed
console.log(user2.email)