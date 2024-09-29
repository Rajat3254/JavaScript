// javascript me oops use kar to sakte hai lekin ye ek prototype based language hai na ki oop specific language 
// isse sugar coat kar diya gaya hai oop se
// this store karta hai current context

// constructor function hame naya instance deta hai ye wahi new keyword ko kehte hai

// prototype is like endless detail of the data type/data structure
// ham prototypre me khud ka bhi kuch inject kar sakte hai dataTypeName.prototype.injectJoKarnaHaiUskaName=function(){this.score++}
// this imp hai kyoki tabhi usko pata chalta hai kiska score++ karna hai

// dusra kuch inherit karna hota hai to we use .__proto__ ye lekin old fashion hogya hai ab Object.setPrototypeOf(jiskaKarnaHai,JismeKarnaHai);