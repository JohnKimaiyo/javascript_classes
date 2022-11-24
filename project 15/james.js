class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email, "user james just logged in");
    }
    logout() {
        console.log(this.email, "user james just logged out");
    }
}

const userone = new User("james@gmail.com", "james");
userone.login();
userone.logout();