import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { F1Service } from '../f1.service';
import { Driver } from '../models/driver.model';
import { Response } from '../models/response.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  driver!: Driver;

  constructor(
    private f1: F1Service,
    private route: ActivatedRoute,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p) => {
      const id = p.get('id') || '';
      this.f1.getDriver(id).subscribe((driver: Response) => {
        this.driver = driver.MRData.DriverTable.Drivers[0];
      });
    });
  }

  back(): void {
    this.location.back();
  }
}
