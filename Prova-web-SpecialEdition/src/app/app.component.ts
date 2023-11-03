import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { GeralserviceService } from './geralservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Prova-web-SpecialEdition';
  constructor(private service: GeralserviceService) {
    this.service.getUser().subscribe(user => {
      sessionStorage.setItem('user', JSON.stringify(user))
    })

  }

  


  
  

 

}
