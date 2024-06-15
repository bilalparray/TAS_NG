import { CommonService } from 'src/app/services/common.service';
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
    private playersService: PlayersService,
    public commonService: CommonService
  ) {}
  player!: any;
  ngOnInit() {
    // Access route parameters using ActivatedRoute
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getPlayerById(id);
    }
  }

  async getPlayerById(playerId: string): Promise<void> {
    try {
      const response = await this.playersService.getPlayerById(playerId);
      this.player = response.axiosResponse.data; // Assuming response structure matches Players interface
      this.calculateAverageAndRank();
      this.calculateCareerWickets();
      this.calculateYearlyWickets();
      this.calculateYearlyFifties();
      this.calculateCareerFifties();
      this.calculateCareerHunderend();
      this.calculateYearlyHunderend();
      this.calculateCareerHighest();
      this.calculateYearlyHighest();
      this.calculateCareerTotalRuns();
      this.calculateYearlyTotalRuns();
      this.calculateCareerTotalBalls();
      this.calculateYearlyTotalBalls();
      this.calculateCareerStrikeRate();
      this.calculateYearlyStrikeRate();
      this.calculateYearlyAverage();
      this.calculateCareerAverage();
      this.calculateYearlyTotalMatches();
      this.calculateCareerTotalMatches();
    } catch (error) {
      console.error('Error fetching player:', error);
    }
  }
  calculateAverageAndRank(): void {
    if (this.player && this.player.scores && this.player.scores.career.runs) {
      const runs = this.player.scores.career.runs.map((run: string) =>
        Number(run)
      );
      const innings = this.player.scores.career.innings.length;
      const totalRuns = runs.reduce((acc: any, curr: any) => acc + curr, 0);
      this.player.average = innings > 0 ? totalRuns / innings : 0;
      console.log(this.player.average);

      // Retrieve all players from localStorage or other source
      let allPlayers: Players[] = JSON.parse(
        localStorage.getItem('players') || '[]'
      );

      // Update or add current player
      const existingPlayerIndex = allPlayers.findIndex(
        (p) => p._id === this.player._id
      );
      if (existingPlayerIndex === -1) {
        allPlayers.push(this.player);
      } else {
        allPlayers[existingPlayerIndex] = this.player;
      }

      // Sort players by average descending
      allPlayers.sort((a, b) => (b.average || 0) - (a.average || 0));

      // Assign ranks based on sorted order
      allPlayers.forEach((player, index) => {
        player.rank = index + 1;
      });

      // Serialize only necessary properties for storage
      const serializedPlayers = allPlayers.map((p) => ({
        _id: p._id,
        name: p.name,
        role: p.role,
        average: p.average,
        rank: p.rank,
        // Add other necessary properties
      }));

      // Update localStorage with serialized player data
      localStorage.setItem('players', JSON.stringify(serializedPlayers));

      // Update current player's rank
      this.player.rank = allPlayers.find(
        (p) => p._id === this.player._id
      )?.rank;
    }
  }

  calculateCareerWickets() {
    this.player.careerWickets = this.player.scores.career.wickets.reduce(
      (acc: any, curr: any) => Number(acc) + Number(curr),
      0
    );
  }
  calculateYearlyWickets() {
    this.player.yearlyWickets = this.player.scores.wickets.reduce(
      (acc: any, curr: any) => Number(acc) + Number(curr),
      0
    );
  }
  calculateYearlyFifties() {
    this.player.yearlyFifties = this.player.scores.runs.filter(
      (number: any) => Number(number) >= 50 && number < 100
    ).length;
  }
  calculateCareerFifties() {
    this.player.careerFifties = this.player.scores.career.runs.filter(
      (number: any) => Number(number) >= 50 && number < 100
    ).length;
  }
  calculateCareerHunderend() {
    this.player.careerHundrends = this.player.scores.career.runs.filter(
      (number: any) => Number(number) >= 100
    ).length;
  }
  calculateYearlyHunderend() {
    this.player.yearlyHundrend = this.player.scores.runs.filter(
      (number: any) => Number(number) >= 100
    ).length;
  }
  calculateCareerHighest() {
    const numbersAsNumbers = this.player.scores.career.runs.map((num: any) =>
      parseInt(num, 10)
    );
    this.player.careerHighest = Math.max(...numbersAsNumbers);
  }
  calculateYearlyHighest() {
    const numbersAsNumbers = this.player.scores.runs.map((num: any) =>
      parseInt(num, 10)
    );
    this.player.yearlyHighest = Math.max(...numbersAsNumbers);
  }
  calculateCareerTotalRuns() {
    this.player.careerTotalRuns = this.player.scores.career.runs.reduce(
      (acc: any, curr: any) => Number(acc) + Number(curr),
      0
    );
  }
  calculateYearlyTotalRuns() {
    this.player.yearlyTotalRuns = this.player.scores.runs.reduce(
      (acc: any, curr: any) => Number(acc) + Number(curr),
      0
    );
  }
  calculateCareerTotalBalls() {
    this.player.careerTotalBalls = this.player.scores.career.balls.reduce(
      (acc: any, curr: any) => Number(acc) + Number(curr),
      0
    );
  }
  calculateYearlyTotalBalls() {
    this.player.yearlyTotalBalls = this.player.scores.balls.reduce(
      (acc: any, curr: any) => Number(acc) + Number(curr),
      0
    );
  }
  calculateCareerStrikeRate() {
    this.player.careerStrikeRate = (
      (this.player.careerTotalRuns / this.player.careerTotalBalls) *
      100
    ).toFixed(2);
  }
  calculateYearlyStrikeRate() {
    this.player.yearlyStrikeRate = (
      (this.player.yearlyTotalRuns / this.player.yearlyTotalBalls) *
      100
    ).toFixed(2);
  }

  calculateYearlyTotalMatches() {
    this.player.yearlyTotalMatches = this.player.scores.runs.length;
  }
  calculateCareerTotalMatches() {
    this.player.careerTotalMatches = this.player.scores.career.runs.length;
  }
  calculateCareerAverage() {
    this.player.careerAverage = (
      this.player.careerTotalRuns / this.player.scores.career.runs.length
    ).toFixed(2);
  }
  calculateYearlyAverage() {
    this.player.yearlyAverage = (
      this.player.yearlyTotalRuns / this.player.scores.runs.length
    ).toFixed(2);
  }
}
