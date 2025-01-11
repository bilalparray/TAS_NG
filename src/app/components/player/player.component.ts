import { CommonService } from 'src/app/services/common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PlayerService } from 'src/app/services/player.service';
import { ImageUpdate } from 'src/app/models/service/v1/image';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private playersService: PlayersService,
    private playerService: PlayerService,
    public commonService: CommonService,
    private ngxService: NgxUiLoaderService
  ) {}
  player!: any;
  updateImage = new ImageUpdate();
  year = new Date();
  ngOnInit() {
    // Access route parameters using ActivatedRoute
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getPlayerById(id);
      this.updateImage._id = id;
    }
  }

  async getPlayerById(playerId: string): Promise<void> {
    try {
      this.ngxService.start();
      const response = await this.playersService.getPlayerById(playerId);
      this.player = response.axiosResponse.data;
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
      this.calculateTotalLastFourRuns();
      if (response) {
        this.ngxService.stop();
      }
    } catch (error) {
      this.commonService.showSweetAlertToast({
        icon: 'error',
        text: 'An error occurred while fetching the player.',
        timer: 2000,
      });
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
  calculateTotalLastFourRuns() {
    this.player.totalLastFourRuns = this.player.scores.lastfour.reduce(
      (acc: any, curr: any) => Number(acc) + Number(curr),
      0
    );
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target?.result as string;
        // Remove the data URL prefix
        const base64ImageWithoutPrefix = base64Image.split(',')[1];

        this.updateImage.image = base64ImageWithoutPrefix;
        this.updateImageInDB(base64ImageWithoutPrefix);
      };
      reader.readAsDataURL(file);
    }
  }

  async updateImageInDB(base64ImageWithoutPrefix: string) {
    try {
      this.ngxService.start();
      let resp = await this.playerService.updateImage(this.updateImage);

      if (resp.isError) {
        this.commonService.showSweetAlertToast({
          icon: 'error',
          text: 'An error occurred during the upload. Please try using an image smaller than 400kb and jpg only.',
          timer: 3000,
        });
        this.ngxService.stop();
      } else {
        this.player.image = base64ImageWithoutPrefix;
        this.ngxService.stop();
        this.commonService.showSweetAlertToast({
          icon: 'success',
          text: 'Image uploaded successfully!',
          timer: 2000,
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
