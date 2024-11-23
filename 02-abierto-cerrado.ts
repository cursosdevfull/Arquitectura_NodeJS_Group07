class SentMessage {
  sent(
    firstname: string,
    lastname: string,
    email: string,
    subject: string,
    body: string
  ) {
    console.log(`message send to email: ${email}`);
  }
}

class SentSMS extends SentMessage {
  sentSms(firstname: string, lastname: string, phone: string, body: string) {
    console.log(`message send to phone: ${phone}`);
  }
}

class SentEmailHTML extends SentMessage {
  sentEmail(
    firstname: string,
    lastname: string,
    email: string,
    subject: string,
    body: string
  ) {
    console.log(`message html send to email: ${email}`);
  }

  /*sent(firstname: string, lastname: string, email: string, subject: string, body: string) {
        console.log(`message html send to email: ${email}`)
    }*/
}

const sentMessage = new SentMessage();
sentMessage.sent(
  "Carlos",
  "Bujalance",
  "carlos@email.com",
  "Welcome",
  "Welcome to our community"
);

const sentEmailHTML = new SentEmailHTML();
sentEmailHTML.sentEmail(
  "Verónica",
  "Montenegro",
  "veronica@email.com",
  "Welcome",
  "Welcome to our community"
);
