class Base {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log(`my name is ${this.name}`);
  }
}

class App extends Base {
  constructor(name = 'diwao') {
    super(name);
  }
}

var app = new App();
app.showName();
