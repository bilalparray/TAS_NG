import { BaseViewModel } from "../internal/base.viewmodel";
import { DummyTeacherSM } from "../service/v1/dummy-teacher-s-m";

export class HealthViewModel implements BaseViewModel {
  PageTitle: string = "";
  AddEditModalTitle: string = "";
  singleTeacher!: DummyTeacherSM;
  filteredHealthConverters: any[] = [];
  healthConverters: any[] = [];
  weight: number | undefined;
  height: number | undefined;
  bmi: number | null = null;
  bmr: number | null = null;
  age: number | undefined;
  gender: string | undefined;
  bmiCategory: string | null = null;

  // water intaek

  activityLevel: number | null = null;
  activityLevelName: string | undefined;
  climateFactorName: string | undefined;
  climateFactor: number | null = null;
  waterIntake: number | undefined;
  exerciseInMinutes: number | null = 0;
}
