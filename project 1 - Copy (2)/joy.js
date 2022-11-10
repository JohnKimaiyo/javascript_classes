class User{
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
    login(){
        console.log(this.email,'just logged in');
    }
    logout(){
        console.log(this.email,"just logged out");
    }
}

var userone = new User("joy@gmail.com");

userone.login();
userone.logout();