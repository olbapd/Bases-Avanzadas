import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'admin',
  styleUrls: ['./admin.component.scss'],
  templateUrl: './admin.component.html',
})


export class AdminComponent {
  results = [
    { name: 'Germany', value: 8940 },
    { name: 'USA', value: 5000 },
    { name: 'Greace', value: 7200 },
    { name: 'Spain', value: 7200 },
  ];
  showLegend = true;
  colorScheme:any;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  
  constructor() {
    this.colorScheme={
      domain: ['#917aff','#ff5f87', '#33e092','#339fff', '#ffb333']
    };
  }

}