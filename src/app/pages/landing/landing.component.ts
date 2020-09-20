import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  Days : any;
  Users : any[];
  Profiles : any;
  constructor(public Data:ApiService) { }

  ngOnInit() {
    this.Days= this.Data.getDays();
    this.Users= this.Data.getUsers();
    this.Users.forEach(element => {
      console.log(element);
    this.Profiles= element['users']
    console.log(this.Profiles);
    })
  }

}
