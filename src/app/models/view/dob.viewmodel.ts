import { BaseViewModel } from "../internal/base.viewmodel";

export class dobViewModel implements BaseViewModel {
  PageTitle: string = "";
  PageNo?: number | undefined;
  PageSize?: number | undefined;
  FormSubmitted?: boolean | undefined;
  currentDate!: string;
  todaysDate!: Date;
  birthDate!: Date;
  age: string = "";
}
