// promises jo hote hai ya to resolve hote hai ya reject hote ha
// ye async code ke liye use hota hai
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Ha mai hu")
    },2000)
    resolve()
}).then(function(){
    console.log("resolved");
})

// resolve call karene par hi then wale part pe jata hai then tabhi use hota hai jab task resolve ho jata hai
// industries me to ham settimeout ke andar console log nhi karte hai so resolve jab call hoga to ham usme jobhi pass karenge woh as
// an argument hame mil jayega through .then

// agar reject hoga to reject(kuch bhi) likh dena hota hai aur .then().catch() se kam hojata hai 
// .finally () last me pas hota hai hamesha

// hota kya hai ki ham async await ka bhi use kar sakte hai 

const pro=new Promise((resolve,reject)=>{
   setTimeout( function(){ 
    let error=false;
    if(error){
        resolve('Rajat wowww')
    }else{
        reject('rajat aura-1000')
    }
},1000)
})

async function checking(){
       try {
        const aaya=await pro
       console.log(aaya);
       } catch (error) {
        console.log(error);
        
       }
       
}
checking()


// agar ham fetch() pe laga rhe hai async await to

async function getUser(){
  try {
    const response= await fetch('reitjietj')
    const data=await response.json();
    // ha iske liye bhi await use karte hai
    console.log(data);
  } catch (error) {
    console.log(`error aaagya ${error}`);
    
  }
  
}
getUser()

fetch('qriqjr').then().catch().finally()