import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from 'src/app/utils/helper-service';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-manage-brand',
  templateUrl: './manage-brand.component.html',
  styleUrls: ['./manage-brand.component.css']
})
export class ManageBrandComponent implements OnInit {

  public frmBrand;
  public listStatus = [
    {id: 1, name: "Activo"},
    {id: 0, name: "Inactivo"},
  ];
  public listBrands: any = [];
  public id = 0;

  constructor(private service: ManageService, private helperService: HelperService) { 
    this.frmBrand = new FormGroup({
      name: new FormControl(null, Validators.required),
      status: new FormControl(1, Validators.required)
    });
  }

  ngOnInit(): void {
    this.cargarTabla();
  }

  cargarTabla() {
    this.service.getBrands().subscribe(res => {
      if (res && res.status == true) {
        this.listBrands = res.data;
      }
    })
  }

  save() {
    if (this.frmBrand.invalid) {
      alert("Faltan campos por llenar");
      return
    }

    let data = {
      name: this.frmBrand.controls.name.value,
      status: this.frmBrand.controls.status.value == 1
    }

    this.service.save(this.id, data).subscribe(res => {
      if (res && res.status == true) {
        this.helperService.showMessage('success', 'Registro guardado');
        this.cargarTabla();
        this.frmBrand.patchValue({
          name: null,
          status: true
        });
        this.id = 0;
      }
    })
  }

  edit(id: any) {
    this.service.getBrandById(id).subscribe(res => {
      if (res && res.status == true) {
        this.id = res.data.id
        this.frmBrand.patchValue({
          name: res.data.name,
          status: res.data.status ? 1 : 0
        });
      }
    })
  }

  trash(id: any) {
    this.service.delete(id).subscribe(res => {
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
