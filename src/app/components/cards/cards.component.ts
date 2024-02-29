import { Component } from '@angular/core';
import { Players } from 'src/app/models/player';

import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  players: Players[] = [];
  player!: Players;
  //to hide or show cards

  constructor(private playerService: PlayerService) {}
  ngOnInit(): void {
    //callling the get players function on initialiszatin or start
    this.getPlayers();
  }
  // /getting players from api
  getPlayers() {
    return this.playerService.getPlayers().subscribe((data) => {
      this.players = data.players.sort((a: any, b: any) => {
        if (a.ranking > b.ranking) {
          return 1;
        } else if (a.ranking < b.ranking) {
          return -1;
        } else {
          return 0;
        }
      });
    });
  }

  // onSelect(player: Players) {
  //   this.player = player;
  // }
}
