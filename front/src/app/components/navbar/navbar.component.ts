import { Component, OnInit } from '@angular/core';
import { Cinema } from 'src/app/models/cinema';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cinema : Cinema;

  constructor() { }

  ngOnInit(): void {
    this.cinema = JSON.parse(localStorage.getItem("selectedCinema"));
  }

}
