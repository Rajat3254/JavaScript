// objects ham do tarike se create kar sakte hai
// 1. Object.create  iska use abhi utna nhi hai
// 2. objects literals
// ex. const obj={
//     name:"rajat",
//     age:"20"
// }
// aur access karne ke liye we use  Obj.name obj.age lekin if "name":"rajat" hai to obj["name"] se karna hota
const obj={
        name:"rajat",
        age:"20"
    }
console.log(obj);
obj.asirvad=function(){
    console.log("Ki haal chal sastiya kar")
}
console.log(obj.asirvad());
console.log(obj);

// matlab ham bahar agar .se kuch baanyenge to woh bhi reflect hoga
obj.day="monday"
console.log(obj);

// const rajat=new Object() // ye ek singleton object hai
// const rajat1={} // ye ek non singleton object hai

// do object ko concat karna hai to
// const obj2 ={obj1,obj2} isse lekin dikkat ho jata hai nested object aate hai
// so we use .assign() method
// const obj3 = Object.assign({},obj1,obj2,obj3) ab ye jo syntax hai woh battata hai ki ham {} me sare source that is obj1,obj2.. ko store kar rhe hai 
// agar { } ye nhi dete to obj1 me sari concatination ho jati


// aur ke way hai spread wala const obj={...ob1,..ob2}

// agar hame object ki sari keys chahiye to we use Object.keys(objectName); iska dataType hota hai array
// if check kar na hai ki partculat key hai ki nhi to then we use objectName.hasOwnProperty('keyName'); it returns true or false

// object destructuring means hamko agar kisi key ko direct call karna hai ya uska text chota karke call karna hai then we do so
// const {name}=obj // iska matlab hai ham obj ke name key ko destructure kiye hai ab ham agar console.log(name) karenge to 
// obj.name wala chiz print hoga
// agar name ko kuch aur chiz se call karna hai to const {name:n}=obj ab n likh denge to obj.name jesa kaam karega


// Api ye kuch nhi object jesa hi hota hai aur woh JSON format me hota hai 

