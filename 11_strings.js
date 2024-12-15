const name="anjali"

console.log("my name is "+name)            //old method
console.log(`my name is ${name}`)          //new method

//another way to declare a string using string object
const game=new String("anjali")

console.log(game)
console.log(game[0])
console.log(game.charAt(1))
console.log(game.indexOf('l'))
console.log(game.toLocaleUpperCase())     //will not chamge the actual value

const news=game.substring(0,4)
console.log(news)
const news1=game.substring(-8,4)            //will asssume from zero only not from -8
console.log(news1)

//trim
const newstring="     anjali  "
console.log(newstring)
console.log(newstring.trim())

//replace
const url="https://anjaliverma  2023"
url.replace(' ','20')              //original location pe koi change nahi hoga
console.log(url)                     
console.log(url.replace(' ','30'))


console.log(url.includes('anj'))


//split
const name1="anjali-sanjay-verma"
console.log(name1.split('-'))              //splitting will be on the basis of -

