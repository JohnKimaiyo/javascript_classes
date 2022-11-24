class User {
    cosntructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email, "just logged in")
    }
    logout() {
        console.log(this.email, "just logged out")
    }
}
const userone = new User("joames@gmail.com", "james");
userone.login();
userone.logout();