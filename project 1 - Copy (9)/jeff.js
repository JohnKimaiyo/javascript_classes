class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.name, this.email, "just logged in");
  }
  logout() {
    console.log(this.name, this.email, "just logged out");
  }
}

const userone = new User("jeff", "jeff@gmail.com");
userone.login();
userone.logout();
