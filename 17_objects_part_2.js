//declaring object using constructor

const user=new Object()
user.id="123"
user.name="anjali"
user.loggedin=false
console.log(user)

//objects within object
const regular_user={
    email:"anjali@gmail.com",
    fullname:{
        userfullname:{
            f_name:"anjali",
            l_name:"verma"
        }
    }
}
console.log(regular_user.fullname)
console.log(regular_user.fullname.userfullname)
console.log(regular_user.fullname.userfullname.f_name)


//combining or merging of objects
const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"d",
    5:"e",
    6:"f"
}
const obj3={obj1,obj2}      //array walli problem aayegi ki obj3 ke andar ob1 aur obj2 aa jayega lekin obj3 phle ek object rahega
console.log(obj3)

const obj5=Object.assign({},obj1,obj2)    //empty bracket assure that the target is object and all other are source 
console.log(obj5)
console.log(obj1)

const obj4=Object.assign(obj1,obj2)       //while here obj1 will be target and values of object one will be changed
console.log(obj4)                         //here obj4===obj1
console.log(obj1)
