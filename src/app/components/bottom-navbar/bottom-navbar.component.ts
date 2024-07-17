import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss'],
})
export class BottomNavbarComponent {
  version: string = '';
  ngOnInit() {
    this.version = environment.applicationVersion;
  }
}
