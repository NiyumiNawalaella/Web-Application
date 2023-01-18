import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule, } from '@angular/forms';
import { FrontendService } from './frontend.service';

import {HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sports Club Application';

  constructor(private newService: FrontendService,) { }
}
//   Repdate;
//   valbutton = "Save";

//   ngOnInit()
//   {
//     this.newService.GetUser().subscribe(data => this.Repdate = data)
//   }
//   onSave = function(users, isvalid: boolean)
//   {
//     users.mode = this.valbutton;
//     this.newService.SaveUser(user)
//     .subscribe(data => {alert(data.data);
//     this.ngOnInit();
//   }
//   , error => this.errorMessage = error)
//   }
//   edit = function(kk)
//   {
//     this.id == kk._id;
//     this.name =kk.name;
//     this.address = kk.address;
//     this.valbutton = "Update";
//   }
//   delete = function(id)
//   {
//     this.newService.deleteUser(id)
//     .subscribe(data => {alter(data.data); this.ngOnInit();}, error => this.errorMessage = error)
//   }
// }
