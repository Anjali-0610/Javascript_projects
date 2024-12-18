const csk=["dhoni","raina","jaddu"]
const mi=["rohit","pandaya","sky"]

csk.push(mi)
console.log(csk)    //push make chamges in the original array but the output will be array within array

csk.concat(mi)      //conacte returns a new merged array and does not make changes to the original array 
console.log(csk)    //thus output will be old array only
console.log(csk.concat(mi))    //this will print the merged array also not in array within array format as in push

//we will require a new variable to store the merge array
const all=mi.concat(csk)
console.log(all)


/*---another method-----*
spread ->this just splits each of the array into single-single element
and unlike concat multiple arrays can be merged in this*/
const csk_new=["dhoni","raina","jaddu"]
const mi_new=["rohit","pandaya","sky"]
const new_all=[...csk_new,...mi_new]
console.log(new_all)

/*------to flatten nested array elements into a single array we will use 
.flat() method ->it return a new array with all sub-array elements conctenated into a array and that to recursively up to the specified dept*/
const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_usable=another.flat()
const real_usable1=another.flat(1)
const real=another.flat(Infinity)     //so that array is travesered uupto maximum depth
console.log(real_usable)
console.log(real_usable1)
console.log(real)


//to check whether it is array
console.log(Array.isArray("Anjali"))

//to convert into array
console.log(Array.from("anjali"))

//for object
console.log(Array.from({name:"hitesh",age:20}))   //in this we can also specify whether we want key aur value to be in array without that an empty array will come

//to convert set of elements to array
let s1=30,s2=20,s3=10
console.log(Array.of(s1,s2,s3))