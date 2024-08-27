import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BattingOrderService } from 'src/app/services/batting-order.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'batting-order',
  templateUrl: './batting-order.component.html',
  styleUrls: ['./batting-order.component.scss'],
})
export class BattingOrderComponent implements OnInit {
  constructor(
    private playersService: PlayersService,
    private battingOrderService: BattingOrderService,
    private ngxService: NgxUiLoaderService
  ) {}

  players: any[] = [];
  initialBattingOrder: string[] = [];
  newBattingOrder: string[] = [];
  playersLastFour: any[] = [];
  battingOrderWithScores: any[] = [];

  async ngOnInit() {
    await this.getAllPlayers();
    await this.getBattingOrder();
  }

  async getBattingOrder() {
    try {
      this.ngxService.start();
      const resp = await this.battingOrderService.getBattingOrder();

      if (resp.isError) {
        this.ngxService.stop();
        alert(
          'Sorry We Could not Fetch Batting Order! Please Check Your Internet.'
        );
      } else {
        this.initialBattingOrder = resp.axiosResponse.data.order;
        this.calculateBattingOrderWithScores(); // Calculate batting order with scores after fetching data
        this.ngxService.stop();
      }
    } catch (error) {
      console.error('Error fetching batting order:', error);
      this.ngxService.stop();
      throw error;
    }
  }

  async getAllPlayers() {
    try {
      this.ngxService.start();
      const resp = await this.playersService.getAllPlayers();
      if (resp) {
        this.players = resp.axiosResponse.data;
        this.playersLastFour = this.players.map((player) => ({
          name: player.name,
          lastfour: player.scores.lastfour.reduce(
            (a: number, b: number) => Number(a) + Number(b),
            0
          ),
        }));
        this.ngxService.stop();
      }
    } catch (error) {
      console.error('Error fetching players:', error);
      this.ngxService.stop();
      throw error;
    }
  }

  // Calculate the new batting order with total scores
  calculateBattingOrderWithScores() {
    this.battingOrderWithScores = this.initialBattingOrder.map((playerName) => {
      const playerData = this.playersLastFour.find(
        (player) => player.name === playerName
      );
      const totalScore = playerData ? playerData.lastfour : 0;
      return {
        name: playerName,
        totalScore: totalScore,
      };
    });
  }
}
