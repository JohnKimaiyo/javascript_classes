class User {
    constructor(email, name) {
        this.email = email;
        this.name = name
    }
    login() {
        console.log(this.email, "just loggen in")
    }
    logout() {
        console.log(this.email, "just logged out")
    }
}

const userone = new User("jeff@gmail.com", "jeff");

userone.login();
userone.logout();