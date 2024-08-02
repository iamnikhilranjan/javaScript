class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    //jo bhi variables h inme se kisi me bhi getters or setters lga sakte ho 
    //jitne bhi properties banate h unke naam se getters aur setters methods bn jate h automatically.
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);