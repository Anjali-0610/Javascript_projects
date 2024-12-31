/*----loops are also called as iterators----------*/
for(let i=0;i<7;i++)
{
    console.log(`outer loop value:${i+1}`)
    for(let j=0;j<5;j++)
    {
        console.log(`outer loop value :${i+1} and outer loop value ${j+1}`)
    }
}
console.log("-----------------------------")

let arr=[1,2,4,6,7,8,4,3]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
console.log("-----------------------------")

/****************  Break and Continue **************/
for(let i=0;i<arr.length;i++)
{
    if(i===5)
    {
        console.log("index 5 hai")
        break
    }

    if(i==2)
        continue
    
    console.log(`arr[${i}] is ${arr[i]}`)
}

