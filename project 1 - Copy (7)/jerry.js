class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.name, this.email, "just logged in");
  }
  logout() {
    console.log(this.name, this.email, "jsut logged out");
  }
}

var userone = new User("jerry@gmail.com", "jerry");

userone.login();
userone.logout();
