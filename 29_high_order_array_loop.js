//--------------for of loop prints values-----------//

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i)
}
console.log("-------------------------")
const greet="hello anjali"
for(const i of greet)
{
    console.log(i)
}
console.log("-------------------------")


//map----->  conatins unique values
const map=new Map()
map.set('in',"india")
map.set('usa',"united states of america")
map.set('fr',"france")
map.set('in',"india")
//1.
console.log(map)
console.log("-------------------------")
//2.
for(const key of map)
{
    console.log(key)
}
console.log("-------------------------")
//3.
for(const [key,value] of map)
{
    console.log(key,"->",value)
}
console.log("-------------------------")

//-------------for in mein keys print hoti hai---------------------//
//objects
const myobj={
    'game1':'NFS',
    'game2':'spiderman'
}
for(const key in myobj)
{
    console.log(`${key} is for ${myobj[key]}`)
}
console.log("-------------------------")

//---------for in (arrays)------------------//
//array ki keys mtlb index hota hai
const arr1=["an","ak","ar","am"]
for(const key in arr1){
    console.log(key)
    console.log(`${key}----->${arr1[key]}`)
}
console.log("-------------------------")

//-----map-----------
//for in loop doesnot work for map as map is not iteratable


//-----------for each loop(higher order function---------------//
const coding=["js","cpp","java","python","c#"]
coding.forEach(function(item){                //for each ek callback function hai esliye naam nahi hota
    console.log(item)                           //item array ki value rakh ke rakhta hai
})                          
console.log("-------------------------")

//agar phle se bane function ko each array element ke liye call karna ho to
function print(item)
{
    console.log(item)
}
coding.forEach(print)
console.log("-------------------------")

//for each has access to array item,array index, array list in this same order
coding.forEach((item,index,arr)=>
{
    console.log(item,index,arr)
})
console.log("-------------------------")
//------------array of objects---------------//
const mycoding=[
    {
        l_name:"javascript",
        l_file:"js"
    },
    {
        l_name:"java",
        l_file:"jaava"
    },
    {
        l_name:"python",
        l_file:"py"
    }
]

mycoding.forEach((item)=>
{
    console.log(item.l_file)
})
