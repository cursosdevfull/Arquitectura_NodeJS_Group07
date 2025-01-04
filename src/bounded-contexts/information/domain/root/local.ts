import { AdditionalInformation } from "../entities/additional-information";
import { Classes } from "../entities/classes";

export class Local {
  private readonly localId: number;
  private name: string;
  private additionalInformation: AdditionalInformation;
  private amenities: string[];
  private classes: Classes[];

  constructor(
    name: string,
    additionalInformation: AdditionalInformation,
    amenities: string[],
    classes: Classes[]
  ) {
    /*     const nameVO = NameVO.create(name);
    this.name = nameVO.value;

    const classesVO = ArrayVO.create(classes, 3, "classes");
    this.classes = classesVO.value;

    const amenitiensVO = ArrayVO.create(amenities, 3, "amenities");
    this.amenities = amenitiensVO.value; */

    this.localId = new Date().getTime();
    this.name = name;
    this.additionalInformation = additionalInformation;
    this.amenities = amenities;
    this.classes = classes;
  }

  properties() {
    return {
      localId: this.localId,
      name: this.name,
      additionalInformation: this.additionalInformation,
      amenities: this.amenities,
      classes: this.classes,
    };
  }
}
