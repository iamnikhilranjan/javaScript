class User{
    constructor (username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Student extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    course(){
        console.log(`A new course was purchased by ${this.username}`);
    }
}

const chai = new Student("chai", "chai@gmail.com", "123");
chai.course();

const masalaChai = new User("masalaChai");
masalaChai.logMe();    

console.log(chai === masalaChai); //false 
console.log(chai === Student);    //false
console.log( chai instanceof Student); //true
console.log( Student instanceof User); //true



