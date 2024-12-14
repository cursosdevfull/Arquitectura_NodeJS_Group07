/* function Log(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Log */

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("Logging - User")
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    console.log("User was created");
    this.name = name;
    this.age = age;
  }
}

const user = new User("Max", 30);
