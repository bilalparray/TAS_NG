import { BaseViewModel } from "../internal/base.viewmodel";

export class timezoneViewModel implements BaseViewModel {
  PageTitle: string = "";
  PageNo?: number | undefined;
  PageSize?: number | undefined;
  FormSubmitted?: boolean | undefined;
  allTimeZones: string[] = [];
  originalAllTimeZones: {}[] = [];
  intervalId!: any;
  searchInput: string = "";
  allTimeZoneArray: any;
  time: string[] = [];
  name: string[] = [];
}
