let myDate=new Date()
// Date access karne ke liye ham uska ek object banate hai 
// lekin jo date aata hai woh format me nhi hota hai so usko format karne ke liye bhut saare function hote hai 
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
// is ka type jo hota hai woh object hota hai

// agar apna khud ka date dalna hai to parenthesis me value pass kardo
let createdDate=new Date(2023, 0, 14) // year month date hour min sec 
// isme month 0 se start hota hai
console.log(createdDate.toDateString());

// another way to pass the date
let createdDate1=new Date("23-03-2024")


// time nikal ke ham usually winner decide karte hai kisne kab submit kiya
let timeStamp=Date.now() // ye ak value deta hai milisecond me
// agar kisi particular date ka woh time chahiye to 
let time=createdDate1.getTime(); 




