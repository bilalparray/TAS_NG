import { BaseViewModel } from '../internal/base.viewmodel';
import { Players } from '../player';
import { DummyTeacherSM } from '../service/v1/dummy-teacher-s-m';

export class BankingViewmodel implements BaseViewModel {
  PageTitle: string = '';
  AddEditModalTitle: string = '';
  player!: Players;
}
