// // some array specific loops are:
// // 1. for of loop
// const arr=[1,2,3]
// for (const i of arr) {
//     console.log(i);
// }
// it can work on strings also jo variable hota hai woh data structure ka each index ka value store karta hai so arr[i] likhni ke jarurat nhi hai


// for in loop use isliye hota hai kyoki for of loop objects par kaam nhi kaarta hai

// for (const key in object) {
//     console.log(key); isse hame keys mil jati hai if value chahiye to use objectName[key] it will give the value 
    
// }

// foreach loop array pe use karte hai 
// arrayName.forEach( function (item){// function callback hai so name nahi hoga iska aur jo parameter pass hui hai woh array ke index zero se jo value aari hai woh store hogi aur usko use karke ham function ke andar kuch bhi kara sakte hai
// // parameter item hota hai index hota hai aur pura array hota hai
// } )

// forEach loop kuch return nhi karta hai so if we want to do return  some particular items then we have to use filter
const arr=[1,2,3,4]
const newarr=arr.filter((item)=>(
    item>1
))

// const newarr=arr.filter((item)=>{
//     if(item>1)
//     return item
// })
// both have same output use arrow.js to get better recap
console.log(newarr);
