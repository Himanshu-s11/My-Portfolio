import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   //blueimg:string="assets/img/blu.jpg";
   orangeimg:string="assets/img/orange.jpeg";
   myimg:string="assets/img/myimg.png";
   emo:string="assets/img/emoji.png";
}
