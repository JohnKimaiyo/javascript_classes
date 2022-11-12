class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "just loggedn in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
}

var userone = new User("james@gmailcom", "james");

userone.login();
userone.logout();
