import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from './services/common.service';
import { AccountService } from './services/account.service';
import { App } from '@capacitor/app';
import { Location } from '@angular/common';
import { Toast } from '@capacitor/toast';
import { AppConstants } from 'src/app-constants';
import { environment } from 'src/environments/environment';
import { AppVersionSM } from './models/service/v1/app-version-sm';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'teamawesomesozeith';
  stopApplicationFlow: boolean = false;

  versionInformation = new AppVersionSM();
  updateAvailable: boolean = false;
  constructor(
    public commonService: CommonService,
    private accountService: AccountService,
    private router: Router,
    private location: Location
  ) {}
  async ngOnInit() {
    await this.initializeApp();
  }
  async initializeApp() {
    this.setupBackButtonListener();
    this.getAllVersionInfoAndCheckForUpdates();
    App.addListener('appStateChange', ({ isActive }) => {
      if (isActive) {
        this.handleBackButton();
      }
    });
  }

  setupBackButtonListener() {
    document.addEventListener('backbutton', () => {
      if (this.router.url != '/home') {
        this.goBack();
      } else {
        this.exitApp();
      }
    });
  }

  backButtonPressedCount = 0;
  exitApp() {
    this.backButtonPressedCount++;
    if (this.backButtonPressedCount === 1) {
      this.showExitToast();
      setTimeout(() => {
        this.backButtonPressedCount = 0;
      }, 2000);
    }
    if (this.backButtonPressedCount > 1) {
      App.exitApp();
    }
  }

  // exit toast for andriod to exit app
  async showExitToast() {
    await Toast.show({
      text: 'Press Again To Exit!',
      duration: 'short',
    });
  }

  private handleBackButton() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Do nothing if the current event is a NavigationEnd.
      }
    });
  }

  goBack() {
    this.location.back();
  }

  async getAllVersionInfoAndCheckForUpdates() {
    try {
      const resp = await this.accountService.getAllVersionInfo();

      if (resp.isError) {
        throw new Error(AppConstants.ErrorPrompts.Load_Data_Error);
      } else {
        this.versionInformation = resp.axiosResponse.data;

        const currentEnvironmentVersion = Number(
          environment.applicationVersion.replace(/\./g, '')
        );

        const minimumVersionFromApi = Number(
          this.versionInformation.minimumVersion.replace(/\./g, '')
        );

        // block flow if currenct version is below minimum version
        if (currentEnvironmentVersion < minimumVersionFromApi) {
          this.stopApplicationFlow = true;
        }
      }
    } catch (error) {
      this.commonService.showSweetAlertToast({
        text: 'Error fetching Version \n ' + error,
        timer: 500,
      });
      throw new Error(AppConstants.ErrorPrompts.Unknown_Error);
    }
  }
}
