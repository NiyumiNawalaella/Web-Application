import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from './auth.service';

// import { AppMaterialModule } from './app.material.module';
// import {MatToolbarModule} from '@angular/material/toolbar';
//************* */
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule} from '@angular/platform-browser/animations/index';
// import {HttpClientModule} from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// ***********************************
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { OurWhyComponent } from './pages/our-why/our-why.component';
import { TheProcessComponent } from './pages/the-process/the-process.component';
import { OurFacilitiesComponent } from './pages/our-facilities/our-facilities.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingsecondComponent } from './pages/bookingsecond/bookingsecond.component';
import { FirstComponent } from './pages/first/first.component';
import { AdminAccountComponent } from './pages/admin-account/admin-account.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { AdminChatComponent } from './pages/admin-chat/admin-chat.component';
import { UserChatComponent } from './pages/user-chat/user-chat.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SecondComponent } from './second/second.component';
// import { PageSchedulerComponent } from './schedule/components/page-scheduler/page-scheduler.component';
// import { FormActivityComponent } from './schedule/components/form-activity/form-activity.component';
// import { ActivityService } from './schedule/service/activity-service';
// import { ShedulerModule } from './schedule/scheduler/scheduler.module';

// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { FrontendService } from './frontend.service';

// import { map } from 'rxjs/operators';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PaymentComponent } from './pages/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    OurWhyComponent,
    TheProcessComponent,
    OurFacilitiesComponent,
    BookingComponent,
    BookingsecondComponent,
    FirstComponent,
    AdminAccountComponent,
    UserAccountComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AdminChatComponent,
    UserChatComponent,
    ChatComponent,
    SecondComponent,
    PaymentComponent,
  ],
  imports: [ BrowserModule, AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatNativeDateModule,
    // AppMaterialModule, *************
    // ShedulerModule, ***************
    // MatToolbarModule
    // MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
