import { BaseViewModel } from '../internal/base.viewmodel';
import { Players } from '../player';

export class DashBoardViewModel implements BaseViewModel {
  PageTitle: string = '';
  FormSubmitted: boolean = false;
  playerId: string = '';
  players: Players[] = [];
}
