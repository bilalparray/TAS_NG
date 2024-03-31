import {
  Component,
  ElementRef,
  PlatformRef,
  ViewChild,
  Input,
} from '@angular/core';
import { EmptyError } from 'rxjs';
import { Mom, Players } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // view child of modal close
  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('closeMomModal') closeMomModal!: ElementRef;
  players: Players[] = [];
  formData: Players = {
    _id: '',
    name: '',
    role: '',
    ranking: '',
    image: '',
    url: '',
    route: '',
    runsScored: '',
    ballsFaced: '',
    wicketsTaken: '',
    lastFour: '',
  };
  // clear the form
  clearForm() {
    this.formData = {
      _id: '',
      name: '',
      role: '',
      ranking: '',
      image: '',
      url: '',
      route: '',
      runsScored: '',
      ballsFaced: '',
      wicketsTaken: '',
      lastFour: '',
    };
  }
  playerId: string = '';

  momId = 1;
  // mom emty object
  momData: Mom = {
    id: 0,
    name: '',
    text: '',
    image: '',
  };
  constructor(private playersService: PlayersService) {}
  ngOnInit() {
    //callling the get players function on initialiszatin or start
    // this.getPlayers();
  }
  // /getting players from api
  // getPlayers() {
  //   return this.playersService.getAllPlayers().subscribe((data) => {
  //     this.players = data.players;
  //     console.table(this.players);
  //   });
  // }

  // // passing id from buttons
  // passId(id: string) {
  //   this.playerId = id;
  //   if (this.playerId !== '') {
  //     this.getById(this.playerId);
  //   } else {
  //     this.clearForm();
  //   }
  // }

  // // dleete pLyer
  // deletePlayer(_id: string) {
  //   this.playerService.deletePlayer(_id).subscribe((res) => {
  //     this.getPlayers();
  //     alert(res.message);
  //   });
  // }
  // // get by id
  // getById(id: string) {
  //   this.playerService.getById(id).subscribe((res) => {
  //     this.formData = res;
  //   });
  // }

  // // addPlayer
  // addPlayer() {
  //   this.playerService.addPlayer(this.formData).subscribe((res) => {
  //     this.clearForm();
  //     this.getPlayers();
  //     this.closeModal.nativeElement.click();
  //   });
  // }
  // //update Player
  // updatePlayer() {
  //   this.playerService.updatePlayer(this.playerId, this.formData).subscribe(
  //     () => {
  //       // Success: Refresh the list, close the modal, and clear the form
  //       this.getPlayers();
  //       this.closeModal.nativeElement.click();
  //       this.clearForm();
  //     },
  //     (error) => {
  //       // Error handling: Log the error or handle it appropriately
  //       console.error('Update failed:', error);
  //     }
  //   );
  // }

  // // updateMOM
  // updateMOM() {
  //   this.playerService.updateMOM(this.momData).subscribe((res) => {
  //     this.momData = res;
  //     this.closeMomModal.nativeElement.click();
  //   });
  // }
}
