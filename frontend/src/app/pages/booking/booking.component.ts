import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';



// import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit
{

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     console.log(params);
    //     this.authService.getBookingsList(params['bookingId']).subscribe((bookingslist: any) => {
    //       this.bookingslist =  bookingslist;
    //     })
    //   }
    // )
  }
  createBooking(uname:string, uemail:string, uphonumber:string, facilities:string, startdateandtime:string, enddateandtime:string, no_of_participants:string, trainner: string, membershipno:string) {
    this.authService.createBooking(uname, uemail, uphonumber, facilities, startdateandtime, enddateandtime, no_of_participants, trainner, membershipno).subscribe((response: any) => {
    console.log(response);
    //Now navigation to /bookings/response._id

   });
  }
}
  // createNewBooking(){
  //   this.authService.createBooking('Testing').subscribe((response: any) => {
  //     console.log(response);
  //   });
  // }
// implements OnInit
//{

  // constructor(
    // private issueService: IssueService
    // ) { }

  // ngOnInit()
  // {
  //   this.issueService.getIssues().subscribe((issues) =>
  //   {
  //     console.log(issues);
  //   });
  // }
  // public successMsg: string;
  // public errorMsg: string;
  // public username: String;
  // public email: String;
  // public phnum: String;
  // public facilities: String;
  // public startdateandtime: String;
  // public enddateandtime: String;
  // public assitancerequirement: String;
  // public number_of_participants: String;
  // public membershipno: String;

//   constructor(private authService: AuthService)
//   {

//   }
//   ngOnInit()
//   {

//   }
//   // createBookings()
//   // {
//   //   this.successMsg = '';
//   //   this.errorMsg ='';
//   //   this.authService.createBookings(this.username, this.email, this.phnum, this.facilities, this.startdateandtime, this.enddateandtime, this.assitancerequirement, this.number_of_participants, this.membershipno)
//   //   .subscribe((createdBookings: Booking) => {
//   //     this.username = '';
//   //     this.email = '';
//   //     this.phnum = '';
//   //     this.facilities = '';
//   //     const startdateandtime = new Date(createdBookings.startdateandtime).toDateString();
//   //     const enddateandtime = new Date(createdBookings.enddateandtime).toDateString();
//   //     this.assitancerequirement = '';
//   //     this.number_of_participants = '';
//   //     this.membershipno = '';
//   //     this.successMsg = `Booking Placed Successfully for ${startdateandtime} to ${enddateandtime}`;
//   //   },
//   //   (error: ErrorEvent) => {
//   //     this.errorMsg = error.error.message;
//   //   });
//   // }
// }
