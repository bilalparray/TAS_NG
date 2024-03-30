import { BaseViewModel } from "../internal/base.viewmodel";
import { DummyTeacherSM } from "../service/v1/dummy-teacher-s-m";

export class BankingViewmodel implements BaseViewModel {
  PageTitle: string = "";
  AddEditModalTitle: string = "";
  singleTeacher!: DummyTeacherSM;
  filteredBankingConverters: any[] = [];
  bankingConverters: any[] = [];
  /////simple interset
  simpleinterest!: number | undefined;
  principleAmount!: number | undefined;
  rateOfInterest!: number | undefined;
  timePeriod!: number | undefined;
  totalAmount!: number | undefined;
  timePeriodForAll!: number | undefined;
  ///compund variable
  compoundInterest!: number | undefined;
  compoundingFrequency: string = "Monthly";
  // discount variables
  originalPrice!: number | undefined;
  discountPercentage!: number | undefined;
  discountedPrice!: number | undefined;
  savings!: number | undefined;
}
