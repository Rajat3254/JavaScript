// getters setters use hote hai get aur set karne ke liye value 
class user{
    constructor(email,name){
        this.email=email
        this.name=name
    }
    get email(){
        return this._email
        // _isliye kyoki conflict create ho jata hai constructor our set and get me 
    }

    set email(value){
        this._email=value.toUpperCase()
    }
}
const user1=new user("rbewg.gmail","het");
console.log(user1.email);
