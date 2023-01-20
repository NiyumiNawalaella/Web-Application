import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// import { AppMaterialModule } from './app.material.module';
// import {MatToolbarModule} from '@angular/material/toolbar';
//************* */
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule} from '@angular/platform-browser/animations/index';
// import {HttpClientModule} from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// ***********************************
// import { MatButtonModule,MatToolbarModule,MatIconModule,MatSidenavModule } from '@./angular-material-app/angular/material';

import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { OurWhyComponent } from './pages/our-why/our-why.component';
import { TheProcessComponent } from './pages/the-process/the-process.component';
import { OurFacilitiesComponent } from './pages/our-facilities/our-facilities.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AccountComponent } from './pages/account/account.component';
import { BookingsecondComponent } from './pages/bookingsecond/bookingsecond.component';
import { IssueService } from './issue.service';
// import { PageSchedulerComponent } from './schedule/components/page-scheduler/page-scheduler.component';
// import { FormActivityComponent } from './schedule/components/form-activity/form-activity.component';
// import { ActivityService } from './schedule/service/activity-service';
// import { ShedulerModule } from './schedule/scheduler/scheduler.module';

// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { FrontendService } from './frontend.service';

// import { map } from 'rxjs/operators';

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
    BookingComponent,
    AccountComponent,
    BookingsecondComponent
  ],
  imports: [ BrowserModule, AppRoutingModule,
    BrowserAnimationsModule,
    // HttpClientModule,  *********
    // AppMaterialModule, *************
    // ShedulerModule, ***************
    // MatToolbarModule
    // MatToolbarModule,
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
