import {
  Component,
  ElementRef,
  PlatformRef,
  ViewChild,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { EmptyError } from 'rxjs';
import { AppConstants } from 'src/app-constants';
import { Mom, Players } from 'src/app/models/player';
import { DashBoardViewModel } from 'src/app/models/view/dashboard.viewmodel';
import { CommonService } from 'src/app/services/common.service';
import { PlayersService } from 'src/app/services/players.service';
import { BaseComponent } from '../base.component';
import { LogHandlerService } from 'src/app/services/log-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent
  extends BaseComponent<DashBoardViewModel>
  implements OnInit
{
  // view child of modal close
  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('closeMomModal') closeMomModal!: ElementRef;

  // clear the form
  playerForm!: FormGroup;
  imageBase64: string | ArrayBuffer | null = null;
  constructor(
    private playersService: PlayersService,
    private formBuilder: FormBuilder,
    commonService: CommonService,
    logHandler: LogHandlerService
  ) {
    super(commonService, logHandler);
    this.viewModel = new DashBoardViewModel();
    this.playerForm = this.formBuilder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      birthplace: ['', Validators.required],
      image: [''],
      born: ['', Validators.required],
      // Add other form controls as needed
    });
  }
  ngOnInit() {
    this.getAllPlayers();
  }

  // /getting players from api
  async getAllPlayers() {
    try {
      this.playersService.getHttpPlayers().subscribe((res) => {
        this.viewModel.players = res;
        console.log(this.viewModel.players);
      });
    } catch (error) {}
  }

  // // passing id from buttons
  passId(id: string) {
    this.viewModel.playerId = id;
    if (this.viewModel.playerId !== '') {
      this.getById(this.viewModel.playerId);
    } else {
    }
  }

  // // dleete pLyer
  async deletePlayer(id: string) {
    // let deleteConfirmation = await this._commonService.showConfirmationAlert(
    //   `${AppConstants.DefaultMessages.DeleteAlertConfirmation} Recipe?`,
    //   ' ',
    //   true,
    //   'warning'
    // );
    // if (deleteConfirmation) {
    //   try {
    //     this._commonService.presentLoading();
    //     let resp = await this.playersService.deleteRecipe(id);
    //   } catch (error) {
    //     throw error;
    //   } finally {
    //     this._commonService.dismissLoader();
    //   }
    // }
  }
  // // get by id
  getById(id: string) {
    // this.playerService.getById(id).subscribe((res) => {
    //   this.formData = res;
    // });
  }

  // // addPlayer
  async addPlayer() {}
  // //update Player
  updatePlayer() {
    // this.playerService.updatePlayer(this.playerId, this.formData).subscribe(
    //   () => {
    //     // Success: Refresh the list, close the modal, and clear the form
    //     this.getPlayers();
    //     this.closeModal.nativeElement.click();
    //     this.clearForm();
    //   },
    //   (error) => {
    //     // Error handling: Log the error or handle it appropriately
    //     console.error('Update failed:', error);
    //   }
    // );
  }

  // // updateMOM
  updateMOM() {
    // this.playerService.updateMOM(this.momData).subscribe((res) => {
    //   this.momData = res;
    //   this.closeMomModal.nativeElement.click();
    // });
  }

  uploadFile(event: any) {
    this._commonService
      .convertFileToBase64(event.target.files[0])
      .subscribe((base64) => {
        let fileName = event.target.files[0].name;
        fileName.split('?')[0].split('.').pop();

        // this.viewModel.image = base64;
      });
  }

  // onSubmit(): void {
  //   if (this.playerForm.valid) {
  //     const playerData: Players = {
  //       _id: '',
  //       name: this.playerForm.value.name,
  //       role: this.playerForm.value.role,
  //       birthplace: this.playerForm.value.birthplace,
  //       image: this.imageBase64 as string,
  //       born: this.playerForm.value.born,
  //       scores: {
  //         runs: [''],
  //         wickets: [''],
  //         balls: [''],
  //         lastfour: [''],
  //         career: {
  //           runs: [''],
  //           wickets: [''],
  //           balls: [''],
  //         },
  //       },
  //     };
  //     this.playersService.addPlayer(playerData).subscribe(
  //       (newPlayer) => {
  //         console.log('Player added successfully:', newPlayer);
  //         // Reset the form after successful submission
  //         this.playerForm.reset();
  //         this.imageBase64 = null; // Reset the image data
  //       },
  //       (error) => {
  //         console.error('Error adding player:', error);
  //       }
  //     );
  //   } else {
  //     // Mark form controls as touched to display validation errors
  //     this.playerForm.markAllAsTouched();
  //   }
  // }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader: FileReader = new FileReader();
      reader.onload = () => {
        // Convert the selected image to Base64
        this.imageBase64 = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
