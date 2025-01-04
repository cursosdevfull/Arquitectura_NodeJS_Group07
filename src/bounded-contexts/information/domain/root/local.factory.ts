import { AdditionalInformation } from "../entities/additional-information";
import { Classes } from "../entities/classes";
import { ArrayVO } from "../value-objects/array.vo";
import { NameVO } from "../value-objects/name.vo";
import { Local } from "./local";

export class LocalFactory {
  static create(
    name: string,
    additionalInformation: AdditionalInformation,
    amenities: string[],
    classes: Classes[]
  ) {
    const nameVO = NameVO.create(name);
    const classesVO = ArrayVO.create(classes, 3, "classes");
    const amenitiensVO = ArrayVO.create(amenities, 3, "amenities");

    return new Local(
      nameVO.value,
      additionalInformation,
      amenitiensVO.value,
      classesVO.value
    );
  }
}
