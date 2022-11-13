class User {
  constructor(email, name, auth) {
    this.email = email;
    this.name = name;
    this.auth = auth;
  }
  login() {
    console.log(this.email, this.auth, "just logged in");
  }
  logout() {
    console.log(this.email, this.auth, "just logged out");
  }
}

const userone = new User("jeff@gmail.com", "jeff", "authentication successfull");
userone.login();
userone.logout();
