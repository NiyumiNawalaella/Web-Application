//task service

// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
// import { environment } from 'src/environments/environment';
// import { Booking } from './booking';
// import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private webRequestService: WebRequestService) {}

  createBookings(uname:string, uemail:string, uphonumber:string, facilities:string, startdateandtime:string, enddateandtime:string, no_of_participants:string, trainner: string, membershipno:string) {
      //sending a web request to create a booking
      return this.webRequestService.post('bookings',{uname,uemail, uphonumber, facilities, startdateandtime, enddateandtime, no_of_participants, trainner, membershipno});
     }
     getBookings() {
      return this.webRequestService.get('bookings');
     }
     createBooking(uname:string, uemail:string, uphonumber:string, facilities:string, startdateandtime:string, enddateandtime:string, no_of_participants:string, trainner: string, membershipno:string) {
      //sending a web request to create a booking
      return this.webRequestService.post('booking',{uname,uemail, uphonumber, facilities, startdateandtime, enddateandtime, no_of_participants, trainner, membershipno});
     }
     getBooking() {
      return this.webRequestService.get('booking');
     }

  createTestimonial(email: string, comment: string) {
    //sending a web request to create a testimonials
    return this.webRequestService.post('testimonials', {email, comment});
  }
  getTestimonials()
    {
      return this.webRequestService.get('testimonials');
    }

    // getBookingsList(bookingId: string) {
    //   return this.webRequestService.get(`bookings/${bookingId}/bookingslist`)
    // }
}
  // createBooking(title:string) {
  //   //sending a web request to create a booking
  //   return this.webRequestService.post('bookings', {title});
  //  }

  // loggedInStatus = false
  // constructor(private http: HttpClient) { }

  // getUserDetails(email: any, password: any)
  // {
  //   //post these details to API server and return user infor if correct
  //   return this.http.post('/api/auth.php', {
  //     email,
  //     password
  //   })
  // }
  //bookings
  // private BASE_URL = environment.API_URL;

  // constructor()
  // {
  //   // getBookings(): Observable<Booking[]>
  //   // {
  //   //   return this.http.get<Booking[]>(`${this.BASE_URL}/bookings`)
  //   // }
  //   // createBookings(username: String, email: String, phnum: String, facilities: String, startdateandtime: String, enddateandtime: String, assitancerequirement: String, number_of_participants: String, membershipno: String): Observable<Booking>
  //   // {
  //   //   return this.http.post<Booking[]>(`${this.BASE_URL}/bookings`, {username, email, phnum,  facilities, startdateandtime, enddateandtime, assitancerequirement, number_of_participants, membershipno})
  //   // }
  //   // cancelBookings(id: String): Observable<any>
  //   // {
  //   //   return this.http.delete(`${this.BASE_URL}/bookings/${id}`);
  //   // }
  //  }

