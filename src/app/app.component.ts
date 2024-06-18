import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from './services/common.service';
import { LogHandlerService } from './services/log-handler.service';
import { AccountService } from './services/account.service';
import { StorageService } from './services/storage.service';
import { App } from '@capacitor/app';
import { Location } from '@angular/common';
import { Toast } from '@capacitor/toast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'teamawesomesozeith';
  constructor(
    public commonService: CommonService,
    private router: Router,
    private location: Location
  ) {}
  async ngOnInit() {
    await this.initializeApp();
  }
  async initializeApp() {
    this.setupBackButtonListener();
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
}
