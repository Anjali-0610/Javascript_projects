const coding=["js","ruby","java","python","cpp"]

//what does for each loop return->>>>>>>>>>it does not return anything

//thus we use filter

const mynums=[1,2,3,4,5,6,7,8,9]
const new_nums=mynums.filter((num)=>num>4)
console.log(new_nums)
const new_nums1=mynums.filter((num)=>{return num>4})
console.log(new_nums)

console.log("--------------------")
//if we need to do the smae using for each then we will require
const r=[]
mynums.forEach((num)=>{
    if(num>4)
        r.push(num)
})
console.log(r)
console.log("--------------------")


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const user=books.filter((bk)=>bk.genre==="History")
  console.log(user)
  console.log("--------------------")
  const user_1=books.filter((bk)=>{return bk.publish>1995})
  console.log(user_1)
  console.log("--------------------")


//----------------MAP---------------------//
  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers.map( (num) => { return num + 10})
console.log(newNums);
console.log("--------------------")

//----chaining method(using two or more methods collectively---------------//
const newNums_1 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums_1)
 console.log("--------------------")


 //------------REDUCE(gives sum of all value)--------------------
 //accumulator ke andar return walli values aa jaati hai lekin first baar mein luch nhi raheta hai esliye intial 0 bhej dete hai
 //current values mtlb array ki values hoti hai
 const mynun_1=[1,2,3,4,5]
 const total=mynun_1.reduce(function(Acc,cur_val){
    console.log(`acc------>${Acc},current--------->${cur_val}`)
    return Acc+cur_val
 },0)
 console.log(total)

 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);