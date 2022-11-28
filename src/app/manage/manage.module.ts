import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageBrandComponent } from './manage-brand/manage-brand.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageVehicleComponent } from './manage-vehicle/manage-vehicle.component';


@NgModule({
  declarations: [
    ManageBrandComponent,
    ManageVehicleComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class ManageModule { }
