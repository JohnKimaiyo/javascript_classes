class User{
    constructor(email,name){
        this.email;
        this.name;
    }
    login(){
        console.log(this.email,"just logged in");
    }
    logout(){
        console.log(this.email,"just logged out")
    }
}

var userone = new User("jerry@gmail.com","jerry");
userone.login();
userone.logout();