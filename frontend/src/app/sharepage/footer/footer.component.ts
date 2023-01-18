import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // addemail = "";
  // addtestimonials = "";
  // @Output() postCreated = new EventEmitter<Post>();
  onAddTestimonials()
  {
    alert("Your Feedback has Been Sent and Will be Reviewed.");
    // s
  }
}
