import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // addemail = "";
  // addtestimonials = "";
  // @Output() postCreated = new EventEmitter<Post>();

  constructor(private authService: AuthService) {}

  ngOnInit()  {

  }

  createTestimonial(email: string, comment:string){
    this.authService.createTestimonial(email, comment).subscribe((response: any) => {
    alert("Your Feedback has Been Sent and Will be Reviewed.");
    console.log(response);
    });
  }
}
