// jese java me banate the wese hi banate hai
// isme extra ye hai variable direct constructor me daal dete hai
class user{
    constructor(username,password,email){
        this.username=username;
        this.password=password;
        this.email=email;
    }
    encryptPassword(){
        console.log(`${this.password}abc`);
        
    }

}
const user1=new user("tah",123,"rajat@gmail.com")
console.log(user1.encryptPassword());

// inherit karne ke liye ab .call(this,attribute) nhi use karna hai ab
// we can use extends keyword
// uper se value lena hai to we use superKeyword but the super keyWord must be first then the other declaration 
class teacher extends user{
    constructor(username,id,password,email){
        super(username,password,email)
        this.id=id
    }
}
const t=new teacher("tja",1,1234,"rjar.@gmail.com")
console.log(t.encryptPassword());

