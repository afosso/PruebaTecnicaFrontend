import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/utils/helper-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
  }

  manageBrands() {
    this.helperService.redirectApp('/manage/brands');
  }

  manageVehicles() {
    this.helperService.redirectApp('/manage/vehicles');
  }

  searchVehicles() {
    this.helperService.redirectApp('/search/vehicles');
  }

}
