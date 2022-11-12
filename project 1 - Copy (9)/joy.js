class User {
  constructor(email, name, avartar) {
    this.name = name;
    this.email = email;
    this.avartar = avartar;
  }
  login() {
    console.log(this.email, this.name, this.avartar, "just logged in");
  }
  logout() {
    console.log(this.email, this.name, this.avartar, "just logged out");
  }
}

const userone = new User("jot@gmail.com", "joy", "wonder woman");
userone.login();
userone.logout();
