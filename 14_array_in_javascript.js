/*
1.array is an object
2.collection of elements/items in single variable
3.zero based indexing
4.array make shallow copy
5.array are not static but cannot be changed
*/

const myarr=[0,1,2,3,3,4,5]
const myarr1=["anjali","akshita","anushka"]

myarr[7]=9
console.log(myarr)

myarr.push(6)
myarr.push(7)
myarr.pop()
myarr.unshift(-1)
myarr.unshift(-2)    //insertion at front
myarr.unshift(-3)     
myarr.shift()       //deletion at front

console.log(myarr)
console.log(myarr.includes(7))
console.log(myarr.includes(9))
console.log(myarr.indexOf(19))
console.log(myarr.indexOf(3))

const mynew=myarr.join()        //converts the array 
console.log(mynew)

//slice and splice
console.log("A",myarr)
const my1=myarr.slice(1,3)
console.log("B",myarr)
console.log(my1)

const my2=myarr.splice(1,3)
console.log("C",myarr)
console.log(my2)
/*the difference between splice and slice is that,,,,, splice remove the ranged value from the original array and the upper limit is inclusive in this
*/