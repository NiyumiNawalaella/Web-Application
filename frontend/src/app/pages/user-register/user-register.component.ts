import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { CredentialsService } from 'src/app/credentials.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  constructor(private credentialsService: CredentialsService) {}

  ngOnInit(){

  }
  onSignupButtonClicked(email: string, password: string) {
    this.credentialsService.usersignup(email, password).subscribe((res: HttpResponse<any>) => {
      console.log(res);
    });
  }
}
