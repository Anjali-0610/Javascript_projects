/*-----------------NUMBER-----------------------*/

const b=400
console.log(b)

const balance=new Number(100)           //Number object
console.log(balance)

//somme number methods
console.log(balance.toFixed(1))

const num1=123.4567
console.log(num1.toPrecision(2))
console.log(num1.toPrecision(4))

const hundreds=100000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-In'))

/*-----------------------MATHS-----------------------*/
//some math object method

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(7.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.7))
console.log(Math.random())     //any value between 0 and 1

console.log(Math.random()*10)     //any value between 0 and 10

console.log((Math.random()*10)+1)     //any value between 1 and 10

console.log(Math.floor(Math.random()*10)+1)    //single digit value between 1 and 10

let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)   //any value between min and max

/*folllowing is the output

400
[Number: 100]
100.0
1.2e+2
123.5
100,000,000
10,00,00,000
Object [Math] {}
4
7
5
4
0.6104371901219257
3.112198973916658
5.674286415111714
9
14 */