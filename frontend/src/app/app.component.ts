import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sports Club Application';

  records = {}

  constructore()
  {

  }
  ngOnInit()
  {

  }

}




//   public setView: View = 'Month';
//   public setDate: Date = new Date(2023,1,15);
//   public eventObject: EventSettingsModel =
//   {
//     dataSource: [{
//       StartTime: new Date(2023,0,17,4,0),
//       EndTime: new Date(2023,0,17,6,0)
//     }]
//   }

// }
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

