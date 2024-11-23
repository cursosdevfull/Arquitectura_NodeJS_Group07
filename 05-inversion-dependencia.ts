interface Provider {
  sentMail(
    firstname: string,
    lastname: string,
    email: string,
    subject: string,
    body: string
  ): void;
}

class GMailProvider implements Provider {
  sentMail(
    firstname: string,
    lastname: string,
    email: string,
    subject: string,
    body: string
  ): void {
    this.sent(email, body, "Welcome", "Welcome to our community");
  }

  sent(email: string, body: string, subject: string, fullname: string) {
    console.log(`email send to ${email}`);
  }
}

class Office365Provider implements Provider {
  sentMail(
    firstname: string,
    lastname: string,
    email: string,
    subject: string,
    body: string
  ): void {
    this.setting(email, body, subject);
    this.sentMessage(firstname, lastname);
  }
  setting(email: string, body: string, subject: string) {}

  sentMessage(firstname: string, lastname: string) {
    console.log("message sent by office365");
  }
}

class GodaddyProvider implements Provider {
  sentMail(
    firstname: string,
    lastname: string,
    email: string,
    subject: string,
    body: string
  ): void {
    this.init(email, body, "Welcome", "Welcome to our community");
  }

  init(email: string, body: string, subject: string, fullname: string) {
    console.log("message send by Godaddy");
  }
}

class Register {
  private firstname: string;
  private lastname: string;
  private email: string;
  //private provider = new GMailProvider()
  //private provider  = new Office365Provider()
  //private provider = new GodaddyProvider()
  //private provider: Provider = new GMailProvider()
  //private provider: Provider = new Office365Provider()
  private provider: Provider = new GodaddyProvider();

  constructor(firstname: string, lastname: string, email: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }

  save() {
    //this.provider.sent(this.email, "Welcome to our community", "Welcome", `${this.firstname} ${this.lastname}` )
    //this.provider.setting(this.email, "Welcome to our community", "Welcome")
    //this.provider.sentMessage(this.firstname, this.lastname)
    //this.provider.init(this.email, "Welcome to our community", "Welcome", `${this.firstname} ${this.lastname}`)
    this.provider.sentMail(
      this.firstname,
      this.lastname,
      this.email,
      "Welcome",
      "Welcome to our community"
    );
    console.log("proccess completed");
  }
}

const register = new Register("Pedro", "Malaquias", "pedro@email.com");
register.save();
