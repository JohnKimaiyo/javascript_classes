class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email, "just loged in");
    }
    logout() {
        console.log(this.email, "just logged out");
    }
}

userone = new User("jerr@gmail.com", "jerry");
userone.login();
userone.logout();