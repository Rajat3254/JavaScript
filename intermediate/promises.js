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