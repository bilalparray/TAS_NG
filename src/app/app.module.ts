import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
// import { MomComponent } from './components/mom/mom.component';
import { HomeComponent } from './components/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './components/player/player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BattingOrderComponent } from './components/batting-order/batting-order.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { BottomNavbarComponent } from './components/bottom-navbar/bottom-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    FooterComponent,
    // MomComponent,
    HomeComponent,
    CardsComponent,
    PlayerComponent,
    BattingOrderComponent,
    BottomNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
