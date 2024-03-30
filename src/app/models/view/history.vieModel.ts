import { BaseViewModel } from "../internal/base.viewmodel";
import { DummyTeacherSM } from "../service/v1/dummy-teacher-s-m";

export class HistoryViewModel implements BaseViewModel {
  PageTitle: string = "Dummy Teacher";
  AddEditModalTitle: string = "";
  teachers: DummyTeacherSM[] = [];
  singleTeacher!: DummyTeacherSM;
  historItems: any[] = [];
  newArrayFiltered: any[] = [];
}
