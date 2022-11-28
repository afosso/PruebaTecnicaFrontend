import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from 'src/app/utils/helper-service';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-manage-vehicle',
  templateUrl: './manage-vehicle.component.html',
  styleUrls: ['./manage-vehicle.component.css']
})
export class ManageVehicleComponent implements OnInit {

  public frmVehicle;
  public listStatus = [
    {id: 1, name: "Nuevo"},
    {id: 0, name: "Usado"},
  ];
  public listBrands: any = [];
  public listVehicles: any = [];
  public id = 0;

  constructor(private service: ManageService, private helperService: HelperService) { 
    this.frmVehicle = new FormGroup({
      status: new FormControl(1, Validators.required),
      brandId: new FormControl(null, Validators.required),
      line: new FormControl(null, Validators.required),
      model: new FormControl(null, Validators.required),
      marketValue: new FormControl(0, Validators.required),
    });
  }

  ngOnInit(): void {
    this.cargarTabla();
    this.getBrands();
  }

  getBrands() {
    this.service.getBrands().subscribe(res => {
      if (res && res.status == true) {
        this.listBrands = res.data;
      }
    })
  }

  cargarTabla() {
    this.service.getVehicles().subscribe(res => {
      if (res && res.status == true) {
        this.listVehicles = res.data;
      }
    })
  }

  save() {
    if (this.frmVehicle.invalid) {
      alert("Faltan campos por llenar");
      return
    }

    let data = {
      status: this.frmVehicle.controls.status.value == 1,
      brand: {id: this.frmVehicle.controls.brandId.value},
      line: this.frmVehicle.controls.line.value,
      model: this.frmVehicle.controls.model.value,
      marketValue: this.frmVehicle.controls.marketValue.value,
    }

    this.service.save(this.id, data, "vehicle").subscribe(res => {
      if (res && res.status == true) {
        this.helperService.showMessage('success', 'Registro guardado');
        this.cargarTabla();
        this.frmVehicle.patchValue({
          status: 1,
          brandId: null,
          line: null,
          model: null,
          marketValue: null,
        });
        this.id = 0;
      }
    })
  }

  edit(id: any) {
    this.service.getVehicleById(id).subscribe(res => {
      if (res && res.status == true) {
        this.id = res.data.id
        this.frmVehicle.patchValue({
          status: res.data.status ? 1 : 0,
          brandId: res.data.brand.id,
          line: res.data.line,
          model: res.data.model,
          marketValue: res.data.marketValue,
        });
      }
    })
  }

  trash(id: any) {
    this.service.delete(id, "vehicle").subscribe(res => {
      if (res && res.status == true) {
        this.helperService.showMessage('success', 'Registro eliminado');
        this.cargarTabla();
      }
    })
  }

  back() {
    this.helperService.redirectApp('dashboard');
  }

}
