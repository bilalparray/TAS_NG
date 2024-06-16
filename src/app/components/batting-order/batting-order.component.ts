import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'batting-order',
  templateUrl: './batting-order.component.html',
  styleUrls: ['./batting-order.component.scss'],
})
export class BattingOrderComponent implements OnInit {
  constructor(private playersService: PlayersService) {}
  players: any[] = [];
  initialBattingOrder: string[] = [
    'Sahil Parray',
    'Ishtiyaq Ayoub',
    'Owais Farooq Dar',
    'Suhail Parray',
    'Bilal Ahmad Parray',
    'Zahid Bashir',
    'Ahsaan ul Haq',
    'Showket Parray',
    'Muzamil Fayaz',
    'Liyaqat Tariq',
    'Ubi Obaid',
  ];
  newBattingOrder: string[] = [];
  playersLastFour: any[] = [];
  battingOrderWithScores: any[] = [];

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

  ngOnInit() {
    this.getAllPlayers().then(() => {
      this.calculateNewBattingOrder();
    });
  }

  calculateNewBattingOrder() {
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
    let lastThreeFromInitial = this.initialBattingOrder.slice(8, 11);

    // Get the first eight players from topFive and lastThreeFromInitial
    let firstEight = [...topFive, ...lastThreeFromInitial];

    // Get remaining players from initialBattingOrder excluding firstEight
    let remainingPlayers = sortedInitialOrder.filter(
      (player) => !firstEight.includes(player)
    );

    // Combine firstEight and remainingPlayers to form new batting order
    this.newBattingOrder = [...firstEight, ...remainingPlayers];

    // Create an array with player name and total score
    this.battingOrderWithScores = this.newBattingOrder.map((player) => {
      let totalScore =
        this.playersLastFour.find((p) => p.name === player)?.lastfour || 0;
      return {
        name: player,
        totalScore: totalScore,
      };
    });
  }
}
