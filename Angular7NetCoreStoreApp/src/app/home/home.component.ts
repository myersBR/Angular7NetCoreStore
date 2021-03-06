import { Component, OnInit } from '@angular/core';
import { WebApiRestService } from '../web-api-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;
  users: Object;

  constructor(private webApiRest: WebApiRestService) { }

  ngOnInit() {
    this.webApiRest.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    }
  );
  }
}
