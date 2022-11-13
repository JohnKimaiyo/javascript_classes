class User {
  constructor(email, name, authentication) {
    this.email = email;
    this.name = name;
    authentication = authentication;
  }
  login() {
    console.log(this.email, "just logged in");
  }
  logout() {
    console.log(this.email, "just logged out");
  }
  authentication() {
    console.log(this.authentication, "authentication successfull");
  }
}

const userone = new User("james@gmail.com", "james");
userone.login();
userone.logout();
userone.authentication();
