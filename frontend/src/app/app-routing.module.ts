import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { BookingComponent } from './pages/booking/booking.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { OurFacilitiesComponent } from './pages/our-facilities/our-facilities.component';
import { OurStoryComponent } from './pages/our-story/our-story.component';
import { OurWhyComponent } from './pages/our-why/our-why.component';
import { TheProcessComponent } from './pages/the-process/the-process.component';
import { BookingsecondComponent } from './pages/bookingsecond/bookingsecond.component';
import { PageSchedulerComponent } from './schedule/components/page-scheduler/page-scheduler.component';
// import {  MatToolbarModule } from '@angular/material';s

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'our_why', component:OurWhyComponent},
  {path: 'the_process', component:TheProcessComponent},
  {path: 'our_facilities', component:OurFacilitiesComponent},
  {path: 'our_story', component:OurStoryComponent},
  {path: 'news', component:NewsComponent},
  {path: 'account', component:AccountComponent},
  {path: 'booking', component:BookingComponent},
  {path: 'bookingsecond', component:BookingsecondComponent},
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'page1', component: PageSchedulerComponent },
  { path: '**', redirectTo: 'page1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
