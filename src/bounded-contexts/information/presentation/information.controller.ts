import { AdditionalInformation } from "../domain/entities/additional-information";
import { Classes } from "../domain/entities/classes";
import { LocalFactory } from "../domain/root/local.factory";

export class InformationController {
  getLocalInformation() {
    const additionalInformation = new AdditionalInformation(
      "Av. Los Pinos 123",
      ["999888777"],
      "administrator@email.com"
    );
    const classes: Classes[] = [
      new Classes("Yoga", "Lunes a Viernes", "08:00 a 10:00"),
      new Classes("Crossfit", "Lunes a Viernes", "10:00 a 12:00"),
      new Classes("Pilates", "Lunes a Viernes", "12:00 a 14:00"),
    ];

    /*     const local = new Local(
      "Andes del Sur",
      additionalInformation,
      [],
      classes
    ); */

    const local = LocalFactory.create(
      "Andes del Sur",
      additionalInformation,
      ["Piscina", "Gimnasio", "Estacionamiento"],
      classes
    );

    console.log(local);
  }
}

const information = new InformationController();
information.getLocalInformation();
