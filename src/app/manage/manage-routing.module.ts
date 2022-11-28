import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBrandComponent } from './manage-brand/manage-brand.component';
import { ManageVehicleComponent } from './manage-vehicle/manage-vehicle.component';

const routes: Routes = [
  { path: 'brands', component: ManageBrandComponent },
  { path: 'vehicles', component: ManageVehicleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
