import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  myScriptElement: HTMLScriptElement;
  constructor()
  {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/navJS/nav.js";
    document.body.appendChild(this.myScriptElement);
  // nav();
  }
}
