import { AdditionalInformation } from "../entities/additional-information";
import { PAYMENT_METHOD } from "../entities/payment-method";
import { Student } from "../entities/student";

export class Payment {
  readonly paymentId: number;
  readonly student: Student;
  readonly amount: number;
  readonly paymentDate: Date;
  readonly paymentDescription: string;
  readonly paymentMethod: PAYMENT_METHOD;
  readonly additionalInformation: AdditionalInformation;

  constructor(
    paymentId: number,
    student: Student,
    amount: number,
    paymentDate: Date,
    paymentDescription: string,
    paymentMethod: PAYMENT_METHOD,
    additionalInformation: AdditionalInformation
  ) {
    this.paymentId = paymentId;
    this.student = student;
    this.amount = amount;
    this.paymentDate = paymentDate;
    this.paymentDescription = paymentDescription;
    this.paymentMethod = paymentMethod;
    this.additionalInformation = additionalInformation;
  }
}
