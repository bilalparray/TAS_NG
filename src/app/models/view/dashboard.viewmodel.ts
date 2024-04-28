import { BaseViewModel } from '../internal/base.viewmodel';
import { Players } from '../player';

export class DashBoardViewModel implements BaseViewModel {
  PageTitle: string = '';
  FormSubmitted: boolean = false;
  playerId: string = '';
  formData: Players = {
    _id: '',
    name: '',
    role: '',
    ranking: '',
    born: '',
    image: '',
    scores: {
      runs: [''],
      wickets: [''],
      balls: [''],
      lastfour: [''],
      career: {
        runs: [''],
        wickets: [''],
        balls: [''],
      },
    },
  };
}
