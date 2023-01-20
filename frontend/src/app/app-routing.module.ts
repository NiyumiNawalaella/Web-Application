import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './pages/booking/booking.component';
import { HomeComponent } from './pages/home/home.component';
import { OurFacilitiesComponent } from './pages/our-facilities/our-facilities.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { OurWhyComponent } from './pages/our-why/our-why.component';
import { TheProcessComponent } from './pages/the-process/the-process.component';
import { BookingsecondComponent } from './pages/bookingsecond/bookingsecond.component';
import { AdminAccountComponent } from './pages/admin-account/admin-account.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { FirstComponent } from './pages/first/first.component';
import { AdminChatComponent } from './pages/admin-chat/admin-chat.component';
import { UserChartComponent } from './pages/user-chart/user-chart.component';
import { first } from 'rxjs-compat/operator/first';
// import { PageSchedulerComponent } from './schedule/components/page-scheduler/page-scheduler.component';
// import { FormActivityComponent } from './schedule/components/form-activity/form-activity.component';
// import { CalendarComponent } from './schedule/scheduler/calendar/calendar.component';
// import { CalendarAttivityComponent } from './schedule/scheduler/calendar-attivity/calendar-attivity.component';
// import { CalendarCelDateComponent } from './schedule/scheduler/calendar-celdate/calendar-celdate.component';
// import { CalendarCelTimeComponent } from './schedule/scheduler/calendar-celtime/calendar-celtime.component';
// import { CalendarNavbarComponent } from './schedule/scheduler/calendar-navbar/calendar-navbar.component';

// import {  MatToolbarModule } from '@angular/material';s

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'our_why', component:OurWhyComponent},
  {path: 'the_process', component:TheProcessComponent},
  {path: 'our_facilities', component:OurFacilitiesComponent},
  {path: 'our_story', component:OurStoryComponent},
  {path: 'booking', component:BookingComponent},
  {path: 'bookingsecond', component:BookingsecondComponent},
  {path: 'admin_account', component:AdminAccountComponent},
  {path: 'admin_login', component:AdminLoginComponent},
  {path: 'admin_chart', component:AdminChatComponent},
  {path: 'user_account', component:UserAccountComponent},
  {path: 'user_login', component:UserLoginComponent},
  {path: 'user_register', component:UserRegisterComponent},
  {path: 'user_chart', component:UserChartComponent},
  {path: 'first', component:FirstComponent},

  // { path: '', redirectTo: 'page1', pathMatch: 'full' },
  // { path: 'page1', component: PageSchedulerComponent },
  // { path: '**', redirectTo: 'page1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
