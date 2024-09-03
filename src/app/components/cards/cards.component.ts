import { Component } from '@angular/core';
import { Players } from 'src/app/models/player';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PlayersService } from 'src/app/services/players.service';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  players: any[] = [];
  player!: Players;

  //to hide or show cards

  constructor(
    private playersService: PlayersService,
    private router: Router,
    public _commonService: CommonService,
    private ngxService: NgxUiLoaderService
  ) {}
  ngOnInit(): void {
    let playersFromStorage = sessionStorage.getItem('players');
    if (!playersFromStorage) {
      this.getAllPlayers();
    } else {
      this.players = JSON.parse(playersFromStorage);
    }
  }
  async getAllPlayers() {
    try {
      this.ngxService.startLoader('loader-01');
      let resp = await this.playersService.getAllPlayers();
      this.players = resp.axiosResponse.data;
      sessionStorage.setItem('players', JSON.stringify(this.players));
      if (resp) {
        this.ngxService.stopLoader('loader-01');
      }
    } catch (error) {
      this._commonService.showSweetAlertToast({
        icon: 'error',
        text: 'An error occurred while Fetching the Players.',
        timer: 3000,
      });
      throw error;
    }
  }

  goToProfilePage(id: string) {
    this.router.navigate(['/player/', id]);
  }
}
