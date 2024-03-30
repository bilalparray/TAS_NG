import { SampleServiceModelBase } from '../base/sample-service-model-base';

export class DummyTeacherSM extends SampleServiceModelBase<number> {
  name!: string;
  role!: string;
  dob!: string;
  runsScored!: string;
  wicketsTaken!: string;
  ballsFaced!: string;
  lastFour!: string;
  _id!: string;
}
