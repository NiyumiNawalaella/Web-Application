import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  bookingslist: any;
  constructor (private authService: AuthService, private route: ActivatedRoute)
  {

  }
  ngOnInit(){
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     console.log(params);
    //     this.authService.getBookingsList(params['bookingId']).subscribe((bookingslist: any) => {
    //       this.bookingslist =  bookingslist;
    //     })
    //   }
    // )
  }
}
