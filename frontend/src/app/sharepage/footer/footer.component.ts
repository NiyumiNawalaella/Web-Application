import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  onAddTestimonials()
  {
    alert("Your Feedback has Been Sent and Will be Reviewed.");
  }
}
