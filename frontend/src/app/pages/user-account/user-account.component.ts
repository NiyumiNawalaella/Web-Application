import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Booking } from 'src/app/booking';
import { mergeMap} from 'rxjs/operators'
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {

  booking: any;
  constructor(private authService: AuthService, private route: ActivatedRoute){

  }

  ngOnInit()
  {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
      }

    )
      this.authService.getBooking().subscribe((booking:any) => {
      this.booking = booking;
    });


  }
}

