class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const Nikhil = new User("Nikhil");
// console.log(Nikhil.createId());

class Student extends User{
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Student("iphone", "i@phone.com");
console.log(iphone.createId());


