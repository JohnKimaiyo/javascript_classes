class User{
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email,'just loggied in');
    }
    logout(){
        console.log(this.email,'just logged out')
    }
}

var userone = new User("jeff@gmail.com",'jeff');

userone.login();