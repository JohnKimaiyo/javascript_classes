class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log(this.name, this.email, "jsut logged in");
  }
  logout() {
    console.log(this.name, this.email, "jsut logged out");
  }
}

const userone = new User("james@gmail.com", "james");
userone.login();
userone.logout();
