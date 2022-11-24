class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email, "just logged out")
    }
    logout() {
        console.log(this.email, "just logged in")
    }
}

const userone = new User("jerry@gmail.com", "jerry");

userone.login();
userone.logout();
