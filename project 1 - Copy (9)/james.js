class User {
  constructor(name, email) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.name, this.email, "just logged in");
  }
  logout() {
    console.log(this.name, this.email, "just logged in");
  }
}

const userone = new User("james@gmail.com", "james");
userone.login();
userone.logout();
