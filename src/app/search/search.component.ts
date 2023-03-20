import { Component, OnInit } from '@angular/core';
import { F1Service } from '../f1.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  drivers: any = {};

  constructor(f1: F1Service) {
    f1.getDrivers().subscribe(drivers => {this.drivers = drivers.MRData.DriverTable});
  }

  ngOnInit(): void {}
}
