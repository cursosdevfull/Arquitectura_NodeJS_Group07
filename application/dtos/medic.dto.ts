import { Medic } from '../../domain';

export type MedicResponse = {
  firstname: string;
  lastname: string;
  age: number;
};

export class MedicResponseDto {
  static fromDomainToResponse(
    data: Medic | Medic[]
  ): MedicResponse | MedicResponse[] {
    if (Array.isArray(data)) {
      return data.map((item) =>
        MedicResponseDto.fromDomainToResponse(item)
      ) as MedicResponse[];
    }

    return {
      firstname: data.properties().firstname,
      lastname: data.properties().lastname,
      age: data.properties().age,
    };
  }
}
