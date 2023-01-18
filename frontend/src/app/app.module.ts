import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MatInputModule} from '@angular/material';
// import { BrowserAnimationsModule} from '@angular/platform-browser/animations/index';
// import {HttpClientModule} from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { OurWhyComponent } from './pages/our-why/our-why.component';
import { TheProcessComponent } from './pages/the-process/the-process.component';
import { OurFacilitiesComponent } from './pages/our-facilities/our-facilities.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { NewsComponent } from './pages/news/news.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AccountComponent } from './pages/account/account.component';
import { SettingComponent } from './pages/setting/setting.component';
import { BookingsecondComponent } from './pages/bookingsecond/bookingsecond.component';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FrontendService } from './frontend.service';

import { map } from 'rxjs/operators';

// import {
//   MatTableModule,
//   MatProgressSpinnerModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatButtonModule,
//   MatDatepickerModule,
//   MatNativeDataModule,
//   MatToolbarModule,
// } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    OurWhyComponent,
    TheProcessComponent,
    OurFacilitiesComponent,
    OurStoryComponent,
    NewsComponent,
    BookingComponent,
    AccountComponent,
    SettingComponent,
    BookingsecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
    // MatInputModule,
    // BrowserAnimationsModule,
  //   MatTableModule,
  // MatProgressSpinnerModule,
  // MatFormFieldModule,
  // MatInputModule,
  // MatButtonModule,
  // MatDatepickerModule,
  // MatNativeDataModule,
  // MatToolbarModule,
  // HttpClientModule,
  // FormsModule,

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
