import { BaseViewModel } from "../internal/base.viewmodel";

export class engineeringConverterViewModel implements BaseViewModel {
  PageTitle: string = "";
  receivedSearchValue: string = "";
  filteredEngineeringConverters: any[] = [];
  engineeringConverters: any[] = [];
  localStorageItems: any[] = [];
  filteredCommonConverters: string[] = [];
  isForce!: boolean;
  isPressure!: boolean;
  force!: number | undefined;
  pressure!: number | null;
  pascal!: number | undefined;
  kilopascal!: number | undefined;
  bar!: number | undefined;
  atmosphere!: number | undefined;
  psi!: number | undefined;
  torr!: number | undefined;
  isPower!: boolean;
  work!: number | null;
  joule!: number | undefined;
  kilojoule!: number | undefined;
  calorie!: number | undefined;
  kilocalorie!: number | undefined;
  erg!: number | undefined;
  wattHour!: number | undefined;
  isWork!: boolean;
  isCurrent!: boolean;
  isPlaneAngle!: boolean;
  isFavorite!: boolean;
  newton!: number | undefined; // To store values in newtons
  kilogramForce!: number | undefined; // To store values in kilogram-force
  dyne!: number | undefined; // To store values in dynes
  poundForce!: number | undefined; // To store values in pound-force
  imgSrc!: string;
  title!: string;
  current!: number | null;
  router!: string;
  milliampere!: number | undefined;
  microampere!: number | undefined;
  kiloampere!: number | undefined;
  megaampere!: number | undefined;
  ampere!: number | undefined;
  planeAngle!: number | null;
  degree!: number | undefined;
  radian!: number | undefined;
  gradian!: number | undefined;
  minuteOfArc!: number | undefined;
  secondOfArc!: number | undefined;
  sno!: number | null;
  power!: number | null;
  kilowatt!: number | undefined;
  horsepower!: number | undefined;
  caloriePerSecond!: number | undefined;
  btuperhour!: number | undefined;
  ergPerSecond!: number | undefined;
  watt!: number | undefined;
  isSelected: boolean = false;
  selectedItem: any;
  defaultSelectedItem: any;
}
