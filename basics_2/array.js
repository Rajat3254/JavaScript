// arrays ka two functions hai ek hai splice usme original array maniplute ho jata hai wahi slice jo hota hai woh main array maniplute nhi karta hai
myArr=[1,3,2,4,4]
console.log(myArr.slice(1,3))
console.log(myArr.splice(1,3)) // isme last index wala bhi include hota hai

// ways to declare array
const m=[1,2]
const m2=new Array(1,2)

//.push() se ham element add karte hai at last
//.pop() se last element remove ho jata hai

//.unshift() se ham element at start dal dedete hai lekin baki sare shift kar dete hai aage
// .shift() me koi argument nhi dalte hai lekin isse first element remove ho jata hai aur sab aage shift ho jate hai


//agar hame do aaray ko ek banana hai too use concat and spread operater
// concat ek new array deta hai so hame usee store karna hoga
newA=Array.concat(arr);

// spread means glass ko drop karo sab bikhar jayega
// new_a=[...marvel,...dc]
//... is spread opretor 

// ek aur hota hai .flat(Infinity) is ki help se ham array ke andar array ke andar array bhi hoga to bhi sab thik kar deta hai aur ha ye bhi new array deta hai
