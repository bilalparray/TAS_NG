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
  ) {
    // this.ngxService.start();
  }
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
        this.ngxService.stop();
        this.initialBattingOrder = resp.axiosResponse.data.order;
      }
    } catch (error) {
      throw error;
    }
  }
  calculateNewBattingOrder() {
    this.ngxService.start();

    // Create a copy of initialBattingOrder to avoid modifying the original array
    let sortedInitialOrder = [...this.initialBattingOrder].sort((a, b) => {
      // Find players' lastfour sum from playersLastFour array
      let lastfourA =
        this.playersLastFour.find((player) => player.name === a)?.lastfour || 0;
      let lastfourB =
        this.playersLastFour.find((player) => player.name === b)?.lastfour || 0;

      // Sort players based on descending order of lastfour sum
      return lastfourB - lastfourA;
    });

    // Separate players into top five and last three from initialBattingOrder
    let topFive = sortedInitialOrder.slice(0, 5);
    let l3 = this.initialBattingOrder.slice(8, 11);
    let lastThreeFromInitial: any[] = [];

    l3.forEach((player) => {
      if (!topFive.includes(player)) {
        lastThreeFromInitial.push(player);
      }
    });

    // If lastThreeFromInitial has less than 3 players, add from remaining players
    let remainingPlayers = sortedInitialOrder.filter(
      (player) =>
        !topFive.includes(player) && !lastThreeFromInitial.includes(player)
    );

    while (lastThreeFromInitial.length < 3 && remainingPlayers.length > 0) {
      lastThreeFromInitial.push(remainingPlayers.shift());
    }

    // Combine topFive and lastThreeFromInitial
    let firstEight = [...topFive, ...lastThreeFromInitial];

    // Sort firstEight based on lastfour scores
    firstEight = firstEight.sort((a, b) => {
      let lastfourA =
        this.playersLastFour.find((player) => player.name === a)?.lastfour || 0;
      let lastfourB =
        this.playersLastFour.find((player) => player.name === b)?.lastfour || 0;

      return lastfourB - lastfourA;
    });

    // Get remaining players from initialBattingOrder excluding firstEight
    remainingPlayers = sortedInitialOrder.filter(
      (player) => !firstEight.includes(player)
    );

    // Combine firstEight and remainingPlayers to form new batting order
    this.newBattingOrder = [...firstEight, ...remainingPlayers];

    let haveAllPlayersPlayedFourMatches = this.players.every((player) => {
      return player.scores.lastfour.length >= 4;
    });

    if (haveAllPlayersPlayedFourMatches) {
      let resp = this.battingOrderService.setNewBattingOrder({
        order: this.newBattingOrder,
        id: 'null',
      });
    }

    // Create an array with player name and total score
    this.battingOrderWithScores = this.newBattingOrder.map((player) => {
      let totalScore =
        this.playersLastFour.find((p) => p.name === player)?.lastfour || 0;
      return {
        name: player,
        totalScore: totalScore,
      };
    });

    if (this.newBattingOrder.length > 1) {
      this.ngxService.stop();
    }
  }

  async getAllPlayers() {
    try {
      let resp = await this.playersService.getAllPlayers();
      this.players = resp.axiosResponse.data;

      this.playersLastFour = [];

      this.players.forEach((player) => {
        const lastfourSum = player.scores.lastfour.reduce(
          (a: number, b: number) => Number(a) + Number(b),
          0
        );
        const playerWithLastFour = {
          name: player.name,
          lastfour: lastfourSum,
        };

        this.playersLastFour.push(playerWithLastFour);
      });
    } catch (error) {
      console.error('Error fetching players:', error);
      throw error;
    }
  }
}
