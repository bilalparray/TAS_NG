import { BaseViewModel } from "../internal/base.viewmodel";
import { AllConverters } from "../internal/common-models";

export class TopNavViewModel implements BaseViewModel {
  PageTitle: string = "";
  searchText: string = "";
  inputValue: string = "";
  receivedSearchValueFromAppComponent: string = "";
  receivedSearchValue: string = "";
  isDarkThemeChecked!: boolean;
  getDarkThemeFromLocalstorage!: any;
  storedTheme!: string;
  allConvertersList: any[] = [];
  show: boolean = true;
  showSearch: string = "show";
  hideSearch: string = "hide";
  class: string = "";
  applicationCurrentVersion: string = "";
  getThemeFromLocalStorage!: string;
  showHideBackButton: boolean = true;
  platform: string = "";
  playstoreLink: string = "";
}
