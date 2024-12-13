//primitive

 /* 7 types and are called by value
 1.string
 2.number
 3.boolean
 4.null
 5.undefined
 6.symbol
 7.bigInt
*/


//symbol
const id=Symbol('123')
const another_id=Symbol('123')
console.log(id===another_id)

/* refernce (non-primmitive)
1.array
2.objects
3.functions
*/

const myarr=["shaktiman","naajraj","doga"]
const myobj={
    name:"anjali",
    age:22,
}

const func=function(){
    console.log("inside function")
}

console.log(typeof func)

func()