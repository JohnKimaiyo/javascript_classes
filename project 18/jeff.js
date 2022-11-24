class User{
    constructor(email,name){
this.name = name;
this.email = email;
    }
    login(){
        console.log(this.email,"just logged out");
    }
    logout(){
        console.log(this.email,"just logged out");
    }
}

const userone = new User("jeff@gmail.com","jeff");
userone.login();
userone.logout();