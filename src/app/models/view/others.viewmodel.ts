import { BaseViewModel } from "../internal/base.viewmodel";

export class othersViewModel implements BaseViewModel {
  PageTitle!: string;
  PageNo?: number | undefined;
  PageSize?: number | undefined;
  FormSubmitted?: boolean | undefined;
  filteredOtherConverters: any[] = [];
  otherConverters: any[] = [];
  isCooking!: boolean;
  isFuel!: boolean;
  cooking!: number | null;
  tablespoon!: number | undefined;
  fluidOunce!: number | undefined;
  cup!: number | undefined;
  teaspoon!: number | undefined;
  pint!: number | undefined;
  quart!: number | undefined;
  gallon!: number | undefined;
  pinch!: number | undefined;
  drop!: number | undefined;
  slice!: number | undefined;
  selectedItem: any;
  defaultSelectedItem: any;
  fuel!: number | null;
  milesPerGallon!: number | undefined;
  litersPer100Kilometers!: number | undefined;
  kilometersPerLiter!: number | undefined;
  //////
  electronic!: number | null;
  volts!: number | null;
  ohms!: number | null;
  amperes!: number | null;
  watts!: number | null;
  coulombs!: number | null;
  joules!: number | null;
  electronvolts!: number | null;
  farads!: number | null;
  hertz!: number | null;
  isElectronic!: boolean;

  //// storage
  storage!: number | null;
  byte!: number | undefined;
  bit!: number | undefined;

  kilobyte!: number | undefined;
  kilobit!: number | undefined;
  megabit!: number | undefined;
  megabyte!: number | undefined;
  gigabit!: number | undefined;
  gigabyte!: number | undefined;
  terabit!: number | undefined;
  terabyte!: number | undefined;
  petabit!: number | undefined;
  petabyte!: number | undefined;
  exabit!: number | undefined;
  exabyte!: number | undefined;

  isStorage!: boolean;
}
