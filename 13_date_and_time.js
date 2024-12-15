//date is calculated from 1 januray 1970

let mydate=new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleString())
console.log(typeof mydate)

//declaration of date

let mydate1=new Date(2005,7,16)            //january is represented by 0
console.log(mydate1.toDateString())

let mydate2=new Date(2023,0,23,5,3)       //more precise format
console.log(mydate2.toString())

let mydate3=new Date("01-14-2023")         //order or format of date
console.log(mydate3.toDateString())

//timestamp will show the value in milliseconds from the 1 jan 1970 to the corrent time
let mytimestamp=Date.now()
console.log(mytimestamp)

//for comparing our date with the timestamp we need to convert our date in  milliseconds from 1 jan 1970
console.log(mydate1.getTime())

//for seconds
console.log(Date.now()/1000); //will give theoutput in decimal value as well thus we will use floor
console.log(Math.floor(Date.now()/1000))


//some new methods with date
let mydate4=new Date()
console.log(mydate4)
console.log(mydate4.getDate())
console.log(mydate4.getMonth()+1)
console.log(mydate4.getFullYear())

//for more preciseness in to lacalestring we can write values inside it as well
console.log(mydate1.toLocaleString('default',{weekday:"long"}))     //weekday is just one property


/*output will be

2024-12-15T21:10:20.605Z
Sun Dec 15 2024 21:10:20 GMT+0000 (Coordinated Universal Time)
Sun Dec 15 2024
2024-12-15T21:10:20.605Z
12/15/2024, 9:10:20 PM
object
Tue Aug 16 2005
Mon Jan 23 2023 05:03:00 GMT+0000 (Coordinated Universal Time)
Sat Jan 14 2023
1734297020625
1124150400000
1734297020.625
1734297020
2024-12-15T21:10:20.625Z
15
12
2024
Tuesday */