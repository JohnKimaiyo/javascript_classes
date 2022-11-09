class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "just login in");
  }
  logout() {
    console.log(this.email, "just loged out");
  }
}

var userone = new User("john@gmmail.com", "john");
var usertwo = new User("james@gmail.com", "james");

userone.login();
usertwo.logout();
