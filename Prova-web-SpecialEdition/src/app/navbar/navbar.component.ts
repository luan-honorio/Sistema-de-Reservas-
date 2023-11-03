import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() handleEvent = new EventEmitter<string>();
  user: any
  value = new FormControl('Seocho-gu');


  constructor() {
    this.value.valueChanges.subscribe((res: any) => {
      this.handleEvent.emit(res);
    });
  }
  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') as string)
    }

  

}
