class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.email, "just logged ouy");
  }
}

const userone = new User("james@gmail.com", "james");

userone.login();
userone.logout();
