import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HelperService } from 'src/app/utils/helper-service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-vehicles',
  templateUrl: './search-vehicles.component.html',
  styleUrls: ['./search-vehicles.component.css']
})
export class SearchVehiclesComponent implements OnInit {

  public listStatus = [
    {id: 1, name: "Nuevo"},
    {id: 0, name: "Usado"},
  ];
  public listBrands = [];
  public frmSearch;
  public listVehicles = [];

  constructor(private service: SearchService, private helperService: HelperService) { 
    this.frmSearch = new FormGroup({
      status: new FormControl(null),
      brandId: new FormControl(null),
      line: new FormControl(null),
      model: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.service.getBrands().subscribe(res => {
      this.listBrands = res.data;
    })
  }

  search() {
    this.service.getVehicles(this.frmSearch.value).subscribe(res => {
      if (res && res.status == true) {
        this.listVehicles = res.data;
      }
    })
  }

  back() {
    this.helperService.redirectApp('dashboard');
  }

}
