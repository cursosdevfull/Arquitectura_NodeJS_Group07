class ServiceNotification {
  agentNotification: any;

  constructor() {
    this.settingServiceNotification();
  }
  settingServiceNotification() {
    this.agentNotification = {
      sent(firstname: string, lastname: string, message: string) {
        console.log("message send", message);
      },
    };
  }
}

class ServiceDatabase {
  database: any;

  constructor() {
    this.settingDatabase();
  }

  private async settingDatabase() {
    this.database = {
      create(firstname: string, lastname: string) {
        console.log("user created in database");
      },
      update(firstname: string, lastname: string) {
        const fullname = `${firstname} ${lastname}`;
        if (fullname.length < 8)
          throw "fullname must have 8 characters at least";
        console.log("user updated in database");
      },
    };

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 100);
    });
  }
}

class User {
  private readonly userId: number;
  private firstname: string;
  private lastname: string;
  private age: number;
  private active: boolean;

  private agentNotification: any;
  private database: any;

  constructor(firstname: string, lastname: string, age: number) {
    if (firstname.length < 3) throw "Firstname must have 3 characters at least";
    if (lastname.length < 3) throw "Lastname must have 3 characters at least";
    if (age <= 0) throw "Age must be greater than zero";

    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;

    this.active = true;
    this.userId = new Date().getTime();

    this.database = new ServiceDatabase().database;
    this.agentNotification = new ServiceNotification().agentNotification;

    this.agentNotification.sent(firstname, lastname, "User created");
    this.database.create(firstname, lastname);
  }

  update(firstname: string, lastname: string) {
    if (firstname.length < 3) throw "Firstname must have 3 characters at least";
    if (lastname.length < 3) throw "Lastname must have 3 characters at least";

    this.firstname = firstname;
    this.lastname = lastname;

    this.agentNotification.sent(firstname, lastname, "User updated");
    this.database.update(firstname, lastname);
  }
}

const user = new User("Lucía", "Maldonado", 23);
user.update("Leo", "Zavala");
console.log(user);
