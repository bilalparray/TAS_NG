import { SampleServiceModelBase } from '../base/sample-service-model-base';

export class DummySubjectSM extends SampleServiceModelBase<number> {
    subjectName!: string;
    subjectCode!: string;
    dummyTeacherID?: number;
}
