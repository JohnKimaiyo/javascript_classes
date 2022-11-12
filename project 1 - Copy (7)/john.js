class User{
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email,"just logged in");
        console.log(this.name,"just logged in");
    }
    logout(){
        console.log(this.email,"just logged out");
        console.log(this.name,"just logged out");
    }
}
var userone = new User("john@gmail.com","john");

userone.login();
userone.logout();

