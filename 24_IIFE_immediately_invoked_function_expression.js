//+++++++++++++++++++immediately invoked function expression+++++++++++++++++++++//

/*IIFE is used for
 1.global scope separation ->mtlb global scope se within function cheeezen polute na ho jaye
 2.for immediate invokation aur we can say that without calling execution*/

//  ()()
//named IIFE
(function chai(){
    console.log("connected")
})();         //semicolon is needed to stop its execution explictly

//Unamed IIFE by using arrow function
(()=>{console.log("by using arrow function")})();

((name)=>{console.log(`how we can pass value when there is no calling for example:${name}`)})("anjali");