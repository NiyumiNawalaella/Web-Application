import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

declare var name : any
// declare var  swiper :any
// new name();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    new name();
    // new swiper();
  }
}

