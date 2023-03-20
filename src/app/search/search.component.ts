import { Component, OnInit } from '@angular/core';
import { F1Service } from '../f1.service';
import { Driver } from '../models/drivers/driver.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  drivers!: Driver[];
  fDrivers!: Driver[];

  constructor(f1: F1Service) {
    f1.getDrivers().subscribe((drivers) => {
      this.drivers = drivers.MRData.DriverTable.Drivers;
      this.fDrivers = this.drivers;
    });
  }

  ngOnInit(): void {}

  filter(event: any): void {
    const val = event.target.value.toLowerCase();
    this.fDrivers = this.drivers.filter((d: any) => {
      for (const v of val.split(" ")) {
        if (!d.givenName.toLowerCase().includes(v) && !d.familyName.toLowerCase().includes(v) && !d.driverId.toLowerCase().includes(v))
        return false;
      }
      return true;
    })
  }
}
