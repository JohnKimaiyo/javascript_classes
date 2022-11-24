class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email, "user john just logged in");
    }
    logout() {
        console.log(this.email, "user johnjuts logged out")
    }
}

const userone = new User("john@gmail.com", "john");

userone.login();
userone.logout();