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
        this.score = 0;
    }
    //define additional method
    login(){
        console.log(this.email, 'Just logged in')
        return this;
    }

    logout(){
        console.log(this.email, 'Just logged out')
        return this;
    }
    updateScore(){
        this.score ++; // add 1 to initial score
        console.log(this.name, 'score is now', this.score)

        return this; //return the instace of the object
    }
}









//METHOD CHAINNING
//User1.login().updateScore().updateScore().logout()


//INHERITANCE -- use extends keyword

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}


var User1 = new User('john@email.com', 'John')

var User2 = new User('tom@email.com', 'Tom')

var admin = new Admin('admin@admin.com', 'AdminUser')



var users = [User1, User2]

//Admin ability to delete user
admin.deleteUser(User1)

//User does not have access to delete users
// User1.deleteUser(User2) //This will not  work

admin.login()

console.log(users)
