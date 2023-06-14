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
// From the above we encapsulate the user

userOne.logout()