import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CredentialsService } from 'src/app/credentials.service';
// import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  constructor(private credentialsService: CredentialsService)
  {

  }
  ngOnInit()
  {

  }
  onLoginButtonClicked(email: string, password: string) {
    this.credentialsService.userlogin(email, password).subscribe((res: HttpResponse<any>) => {
      console.log(res);
    });
  }

  // loginUser(event:any)
  // {
  //   event.preventDefault()
  //   const target = event.target
  //   const email = target.querySelector('#useremail').value
  //   const password = target.querySelector('#userpassword').value

  //   this.Auth.getUserDetails(email,password).subscribe(data => {
  //     if(data.success)
  //     {
  //     }
  //     else
  //     {
  //       window.alert(data.message)
  //     }
  //   })
  //   console.log(email, password)
  // }
}
