class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log(this.name, this.email, "just logged in");
  }
  logout() {
    console.log(this.name, this.email, "just logged out");
  }
}

var userone = new User("jerry@gmail.com", "jerry");

userone.login();
userone.logout();
