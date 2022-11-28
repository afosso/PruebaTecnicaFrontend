import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchVehiclesComponent } from './search-vehicles/search-vehicles.component';

const routes: Routes = [
  { path: 'vehicles', component: SearchVehiclesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
