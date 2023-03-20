import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { F1Service } from '../f1.service';
import { Driver } from '../models/driver/driver.model';
import Response from '../models/driver/response.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  driver!: Driver;

  constructor(private f1: F1Service, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      const id = p.get('id') || '';
      this.f1.getDriver(id).subscribe((driver: Response) => {
        this.driver = driver.MRData.DriverTable.Drivers[0];
      });
    });
  }
}
