import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vehicle',
  templateUrl: './card-vehicle.component.html',
  styleUrls: ['./card-vehicle.component.css']
})
export class CardVehicleComponent implements OnInit {

  @Input() vehicle: any;

  constructor() { }

  ngOnInit(): void {
  }

}
