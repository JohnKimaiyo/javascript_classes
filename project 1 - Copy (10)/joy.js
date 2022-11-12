class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  login() {
    console.log(this.name, this.email, "joy just logged in");
  }
  logout() {
    console.log(this.email, this.name, "joy just logged out");
  }
}

const userone = new User("joy@gmail.com","joy");
userone.login();
userone.logout();
