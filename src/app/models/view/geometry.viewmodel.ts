import { BaseViewModel } from "../internal/base.viewmodel";
import { DummyTeacherSM } from "../service/v1/dummy-teacher-s-m";

export class GeometryViewModel implements BaseViewModel {
  PageTitle: string = "";
  AddEditModalTitle: string = "";
  singleTeacher!: DummyTeacherSM;
  filteredGeometryConverters: any[] = [];
  geometryConverters: any[] = [];
  firstAngle!: number | undefined;
  secondAngle!: number | undefined;
  thirdAngle!: string | undefined;

  perpendicular!: string;
  base!: string;
  hypotenuse!: string;
  calculatedValue!: string;
}
