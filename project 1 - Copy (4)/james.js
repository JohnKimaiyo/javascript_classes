class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "just login in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
}

var userone = new User("jame@gmail.com", "james");
userone.login();
userone.logout();
