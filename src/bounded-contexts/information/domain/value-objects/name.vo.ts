import { VO } from "./vo";

export class NameVO extends VO<string> {
  static create(value: string) {
    if (value.length < 3) {
      throw new Error("Name must be at least 3 characters long");
    }
    return new NameVO(value);
  }
}
