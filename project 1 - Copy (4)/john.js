class UseR {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "just loged in");
  }
  logout() {
    console.log(this.email, "just loged out");
  }
}

var userone = new UseR("john@gmail.com", "john");
userone.login();
userone.logout();
