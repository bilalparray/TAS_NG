import { SampleServiceModelBase } from '../base/sample-service-model-base';

export class ImageUpdate extends SampleServiceModelBase<number> {
  _id!: string;
  image!: string;
}
