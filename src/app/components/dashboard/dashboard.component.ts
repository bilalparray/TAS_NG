import {
  Component,
  ElementRef,
  PlatformRef,
  ViewChild,
  Input,
  OnInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
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
  players: Players[] = [];

  // clear the form

  constructor(
    private playersService: PlayersService,
    commonService: CommonService,
    logHandler: LogHandlerService
  ) {
    super(commonService, logHandler);
    this.viewModel = new DashBoardViewModel();
  }
  ngOnInit() {
    //callling the get players function on initialiszatin or start
    this.getAllPlayers();
  }
  // /getting players from api
  async getAllPlayers() {
    try {
      let resp = await this.playersService.getAllPlayers();
      this.players = resp.axiosResponse.data.axiosResponse.data;
      console.log(resp.axiosResponse.data);
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
  async addPlayer() {
    try {
      console.log(this.viewModel.formData);

      let resp = await this.playersService.addPlayer(this.viewModel.formData);
      if (resp.isError) {
        console.log('some error occurred while adding player');
      }
    } catch (error) {}
  }
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

        this.viewModel.formData.image = base64;
      });
  }

  async form_addRecipe(form: NgForm) {
    this.viewModel.FormSubmitted = true;
    try {
      this._commonService.presentLoading();
      if (form.invalid) {
        this.markAllControlsAsTouched(form);
        return;
      }

      if (this.viewModel.playerId) {
        let resp = await this.playersService.updatePlayer(
          this.viewModel.formData
        );

        if (resp.isError) {
          await this._exceptionHandler.logObject(resp.errorData);
          this._commonService.showSweetAlertToast({
            title: resp.errorData.displayMessage,
            icon: 'error',
          });
        } else {
          // this.closePopup();
          this._commonService.showSweetAlertToast({
            title: 'Recipie Updated Successfully!',
            icon: 'success',
          });
          this.loadPageData();
          return;
        }
      } else {
        let resp = await this.playersService.addPlayer(this.viewModel.formData);

        if (resp.isError) {
          await this._exceptionHandler.logObject(resp.errorData);
          this._commonService.showSweetAlertToast({
            title: resp.errorData.displayMessage,
            icon: 'error',
          });
        } else {
          // this.closePopup();
          this._commonService.showSweetAlertToast({
            title: 'Recipie Added Successfully!',
            icon: 'success',
          });

          this.loadPageData();
        }
      }
    } catch (error) {
      throw error;
    } finally {
      this._commonService.dismissLoader();
    }
  }
}
