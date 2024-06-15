import { Component } from '@angular/core';
import { Players } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'batting-order',
  templateUrl: './batting-order.component.html',
  styleUrls: ['./batting-order.component.scss'],
})
export class BattingOrderComponent {
  constructor(private playersService: PlayersService) {}
  players: Players[] = [];
  ngOnInit(): void {
    this.getAllPlayers();
  }
  async getAllPlayers() {
    try {
      let resp = await this.playersService.getAllPlayers();
      this.players = resp.axiosResponse.data;
    } catch (error) {
      throw error;
    }
  }
}
