
// falsy vlaue:
// false,0,-0,BigInt 0n,null,"",undefined,NaN
// Truthy values:
// other values are truthy;

// nullish coalescing operator (??) ye use hota hai taki agar kisi variable ka value null ya undefined hai uske jagah ham koi aur chiz return karde taki code me error na aaye;
let val1=null;
val1=10??null
console.log(val1);
let val2=5;
val2=10??null
console.log(val2);

