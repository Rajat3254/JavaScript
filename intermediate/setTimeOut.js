// iska use karke ham koi task particular time ke andar ek baar kara sakte hai 
setTimeout(function(){
console.log("rajat");
},2000)

// Agar hame kisi timeout function ko rokana hai to ham clearTimeOut() ka use karte hai ab timeout function dher saare ho sakte hai
// to jiko rokna hai usko ek variable me store karlo 
// ex. const rukja=setTimeout(function(){
// },2000);
// lekin if ham timeout ke andar nahi roke to woh nhi rukega lekin direct likhne par ruk hi jata hai ab lekin  agar kisi button pe
// eventlisner laga ke woh function dale to woh tabhi rukega jab ham time ke andar woh kaam kare.

setInterval(function(){
    console.log("rajata")
},3000)

// setInterval function bhi same setTimeout ki tarah hai lekin isme utne second bad phir se function execute hota hai 