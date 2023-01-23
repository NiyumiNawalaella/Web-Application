import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Booking } from 'src/app/booking';
import { mergeMap} from 'rxjs/operators'
@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  public loading = true;
  public errorMsg: string;
  public successMsg: string;
  public bookings: Booking[];
  public columns = ['username', 'email', 'phnum', 'facilities', 'startdateandtime', 'enddateandtime', 'assitancerequirement', 'number_of_participants', 'membershipno', 'cancel'];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getBookings().subscribe((bookings:Booking[]) => {
      this.bookings = bookings;
      this.loading = false;
    },
    (error: ErrorEvent) => {
      this.errorMsg = error.error.message;
      this.loading = false;
    });
  }
  cancelBooking(id: string)
  {
    this.authService.cancelBooking(id)
    .pipe(
      mergeMap(() => this.authService.getBookings())
    )
    .subscribe((appointments: Booking[]) => {
      this.bookings = this.bookings;
      this.successMsg = 'Successfully Cancelled the appointment'
    },
    (error: ErrorEvent) => {
      this.errorMsg = error.error.message;
    });
  }
}
