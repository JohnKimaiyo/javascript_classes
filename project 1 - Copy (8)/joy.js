class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.name, this.name, "just logged in");
  }
  logout() {
    console.log(this.name, this.name, "just logged out");
  }
}

var userone = new User("joy@gmail.com", "joy");

userone.login();
userone.logout();
