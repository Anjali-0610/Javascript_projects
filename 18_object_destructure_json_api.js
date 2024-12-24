//object destructing

const course={
    name: "js by hitesh",
    price:"999",
    courselanguage:"javascript"
}
//instead of writing course.cousrelanguage we can opt this method
const {courselanguage}=course
//and then can directly use courselanguage in this
console.log(courselanguage)
//or we can provide alias to this as well
const {courselanguage:c_lang}=course
console.log(c_lang)


//json
//api->backend ki values ko kaise likhte hai type

// {
//     "name":"anjali",
//     "coursename":"computer science",
//      "price" : "949"
// }

//the above was in json format in which keys must also be in string format
//jaruri nahi api haar baar object format mein mille kabhi kabhi array of object format mein bhi aa sakti hai
//for example lets copy api from random user generator 
//the syntax will be in not understable format 
//eske liye json formater type app se samjh sakte hai api ko