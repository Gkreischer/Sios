import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getDate();
  }

  data: string = null;

  getDate(){
    let date = new Date();
    return this.data = `${date.toLocaleDateString('pt-br')} ${date.toLocaleTimeString('pt-br')}`;
  }

}
