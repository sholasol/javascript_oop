// From the above we encapsulate the user

var userOne = {
    email: 'ryu@ninja.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'Has login') //this refers to the object
    },
    logout(){
        console.log(this.name, 'Has logged out')
    }
};


//Accessing object from outside and Updating

userOne.name = 'Joshua';

console.log(userOne.name)


userOne.name = 'Ryu';

console.log(userOne.name)

var em = userOne['email']

console.log(em)


userOne['email'] = 'ryu.joshua@gmail.com';

var em2 = userOne['email']

console.log(em2)


//Using prop as name....the prop value can change at anytime

var prop = 'name';

var res = userOne[prop]

console.log(res)

//change the prop value to email

prop = 'email';

var res = userOne[prop]

console.log(res)

//Update object from outside with pro

userOne.age = 25

console.log(userOne.age)


//CREATING  VERSION OF THE SAME OBJECT USING CLASS

//CAR   -> Red Car
//CAR     -> Blue Car
//CAR     -> Green Car


class User {
    //create a constructor function...responsible for creating object

    constructor(email, name){
        this.email = email;
        this.name = name;
    }
    //define additional method
    login(){
        console.log(this.email, 'Just logged in')
    }

    logout(){
        console.log(this.email, 'Just logged out')
    }
}

var User1 = new User('john@email.com', 'John')

var User2 = new User('tom@email.com', 'Tom')


console.log(User1)

console.log(User2)


User1.login()

User2.logout()


//METHOD CHAINNING