function Add(num1,num2) {
    return num1+num2
}
const ans=Add(1,3)
console.log(ans);
// ham by default bhi values ko daal sakte hai means if agar koi value nhi hai usme to woh consider kar lega ex: Add(num1=3,num2=4)
//bhut baar esa hota hai ki nhame pata nhi hota hai ki kitne parameter banana hai tto us time we use ... which is called rest operator
// yes it is same as the spread operator but it got differenctiated by the place where it is used
// ex: function rajat(...val){} ab agar ham argument 1 de ya do aur return call kare usme to ye ek array return karna hai argument ka

function check(...num){
    return num
}
console.log(check(2,3,5,4));

// another way to declare a function is
// const add=function(num){
//   return num+2
// }
// add(3); call ham ese karenge kyo ki name nhi diye hai function ko aur variable me store kiye hai to isliye ye kar rhe hai
