import { Component } from '@angular/core';
import { Players } from 'src/app/models/player';
import { Router } from '@angular/router';

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
  ranking = {
    id: '',
    name: '',
  };
  //to hide or show cards

  constructor(
    private playersService: PlayersService,
    private router: Router,
    public _commonService: CommonService
  ) {}
  ngOnInit(): void {
    //callling the get players function on initialiszatin or start

    this.getAllPlayers();
  }

  // /getting players from api
  // getPlayers() {
  //   return this.playerService.getPlayers().subscribe((data) => {
  //     console.log(data);
  //     this.players = data;
  //     // this.players = data.players.sort((a: any, b: any) => {
  //     //   if (a.ranking > b.ranking) {
  //     //     return 1;
  //     //   } else if (a.ranking < b.ranking) {
  //     //     return -1;
  //     //   } else {
  //     //     return 0;
  //     //   }
  //     // });
  //   });
  // }

  // onSelect(player: Players) {
  //   this.player = player;
  // }

  async getAllPlayers() {
    try {
      let resp = await this.playersService.getAllPlayers();
      this.players = resp.axiosResponse.data;
      this.calculateAverages();
      this.sortAndRankPlayers();

      // this.players =resp.axiosResponse.data.sort((a: any, b: any) => {
      //   if (a.ranking > b.ranking) {
      //     return 1;
      //   } else if (a.ranking < b.ranking) {
      //     return -1;
      //   } else {
      //     return 0;
      //   }
      // });
    } catch (error) {
      throw error;
    }
  }
  calculateAverages(): void {
    this.players = this.players.map((player) => {
      // Convert runs from string to number
      const runs = player.scores.career.runs.map((run: any) => Number(run));

      const totalRuns = runs.reduce((acc: any, curr: any) => acc + curr, 0);
      const innings = player.scores.career.runs.length;
      player.average = innings > 0 ? totalRuns / innings : 0;

      return player;
    });
  }

  sortAndRankPlayers(): void {
    this.players.sort((a, b) => b.average - a.average);
    this.players.forEach((player, index) => (player.rank = index + 1));
  }
  goToProfilePage(id: string) {
    this.router.navigate(['/player/', id]);
  }
}
