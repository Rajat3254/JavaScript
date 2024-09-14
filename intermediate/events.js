// ham event add karte hai using addEventListner use karke aur jo call back function hota hai uske ek parameter pass karte hai 
// woh hota hi event object jo store karta hai document related and environment retated information

// event.target se hame woh element milta hai jispe eventListner laga hai 
// ye to ham direct pata karsate hai kyoki ham ussi element pe hi to lagaye hai lekin event bubbling hota hai js me
// so agar ham eventListner laga div par to agar div ke andar ke child par click karenge to bhi woh trigger hoga lekin event.target woh elemnt dega jo click hua hai
// aur wahi agar ham div print karte to woh div dde deta aur hame pata hi nhi chalta kisko click karne ke karan event trigger hua 