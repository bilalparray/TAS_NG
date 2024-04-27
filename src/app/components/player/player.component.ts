import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Players } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private playersService: PlayersService
  ) {}
  player!: Players;
  ngOnInit() {
    // Access route parameters using ActivatedRoute
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getPlayerById(id);
    }
  }

  async getPlayerById(routeId: string) {
    try {
      let resp = await this.playersService.getPlayerById(routeId);
      this.player = resp.axiosResponse.data.axiosResponse.data;
      console.log(resp.axiosResponse.data.axiosResponse.data);
    } catch (error) {}
  }
}
