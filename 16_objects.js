/*objects are in key value pair and we can define key as well as value unlike in array where keys were simply integers/index*/

/*objects can be declared in two ways 
1.by literals ------->eske multiple instance baan jaate hai
2. by constructor---->esse singleton object banta hai mtlb ek hi instance hoga ,,,,(object.create) se constructor walli method implement ho jayegi*/


//object literals
//keys are by default in string format
const new_obj={
    name:"anjali",
    "full name":"anjali verma",
    age:21,
    location:"betul",
    email:"anjali@gamil.com",
    isloggedin:false
}
//how to access objects
 console.log(new_obj.age)        //but by this method we cannot access "full name" thus we will use square bracket method
 console.log(new_obj["full name"]) //mostly used method



//how to use symbol as an object key and print it
//first declare a symbol
const mySym= Symbol("key1")
const new_obj_1={
    name:"akshita",
     //mySym:"keyvalue1" //it is the wrong to use symbol as an key because this way will consider mySym as an string same as name and age not a symbol
    [mySym]:"keyvalue1",
    age:19
}
//to access symbol key square bracket method will only work
console.log(new_obj_1[mySym])
console.log( typeof new_obj_1[mySym])
console.log(new_obj_1)       //eske output mein mySym as a symbol bata dega


//how to change value
new_obj.age=22
//how to freeze or lock value
//Object.freeze(new_obj)
new_obj.email="anjali007@gamil.com" //email will not be changed
console.log(new_obj.email)




//how to add function in js
new_obj.greeting=function(){
    console.log(" hello js user \n we have added a new key to the object for using a function")
}
console.log(new_obj.greeting)   //function return back aayega function execute nahi hua hai abhi
console.log(new_obj.greeting()) //will print undefined as this is calling the function and the value inside function will be executed

//to refrence the "name" key  in object
new_obj.greet2=function(){
    console.log(`hello ${this.name} you accesd here using the this keyword`)  //this is used to reference the same object
}
console.log(new_obj.greet2())