import { Component } from '@angular/core';
import { Players } from 'src/app/models/player';
import { Router } from '@angular/router';

import { PlayersService } from 'src/app/services/players.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  players: Players[] = [];
  player!: Players;
  //to hide or show cards

  constructor(private playersService: PlayersService, private router: Router) {}
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

  goToProfilePage(id: string) {
    console.log(id);
    this.router.navigate(['/player/', id]);
  }
}
