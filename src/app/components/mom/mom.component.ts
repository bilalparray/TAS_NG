import { Component } from '@angular/core';
import { Mom } from 'src/app/models/player';
// import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-mom',
  templateUrl: './mom.component.html',
  styleUrls: ['./mom.component.scss'],
})
export class MomComponent {
  momData: any = {};
  // constructor(private playerService: PlayerService) {}
  ngOnInit() {
    // this.getMom();
  }
  // fetch mom
  // getMom() {
  //   this.playerService.getMom().subscribe((data) => {
  //     this.momData = data.mom[0];
  //   });
  // }
}
