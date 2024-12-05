let a="33"
let valuein_number=Number(a)
console.log(typeof valuein_number)


let b="33abc"
let valuein_number1=Number(b)
console.log(typeof valuein_number1)
console.log(valuein_number1)

let c=true;
let valuein_number2=Number(c)
console.log(typeof valuein_number2)
console.log(valuein_number2)

//"33" ->33
//"33aba" ->NAN
//true ->1
//null ->0
//undefined->NaN

let D=1;
let valuein_bool=Boolean(D)
console.log(valuein_bool)

//""  ->false
//"anjali" ->true


let e=33;
let valuein_string=String(e)
console.log(typeof valuein_string)
console.log(valuein_string)
