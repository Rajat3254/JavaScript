// map ka us karke ham value update karsakte hai
const arr=[1,2,3,4,5]
const newArr=arr.map((item)=>item+10)
console.log(newArr);


// reduce me hame do chiz milti hai ek accumulator aur ek currecntValue hame accumulator ki value deni padti hai
const myTotal=arr.reduce((acc,currVal)=> acc+currVal,0)
console.log(myTotal);
