import { Component } from '@angular/core';
import { Mom } from 'src/app/models/player';
import { ManOfTheMatch } from 'src/app/models/service/v1/man-of-the-match';
import { CommonService } from 'src/app/services/common.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-mom',
  templateUrl: './mom.component.html',
  styleUrls: ['./mom.component.scss'],
})
export class MomComponent {
  momData = new ManOfTheMatch();
  constructor(
    private playerService: PlayerService,
    public commonService: CommonService
  ) {}
  ngOnInit() {
    let momFromStorage = sessionStorage.getItem('mom');
    if (!momFromStorage) {
      this.getManOfTheMatch();
    } else {
      this.momData = JSON.parse(momFromStorage);
    }
  }
  // fetch mom

  async getManOfTheMatch() {
    try {
      let resp = await this.playerService.getManOfTheMatch();
      this.momData = resp.axiosResponse.data;

      sessionStorage.setItem(
        'mom',
        JSON.stringify(
          (this.momData = {
            id: this.momData.id,
            name: this.momData.name,
            image: this.momData.image,
            paragraph: this.momData.paragraph,
            runs: this.momData.runs,
            wickets: this.momData.wickets,
          })
        )
      );
    } catch (error) {
      this.commonService.showSweetAlertToast({
        icon: 'error',
        text: 'An error occurred While Fetching the Man of The Match.',
        timer: 3000,
      });
      throw error;
    }
  }
}
