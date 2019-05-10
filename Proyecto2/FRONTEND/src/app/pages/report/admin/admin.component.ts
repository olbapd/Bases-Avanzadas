import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'admin',
  styleUrls: ['./admin.component.scss'],
  templateUrl: './admin.component.html',
})


export class AdminComponent {
  startDate :any;
  endDate : any;


  results3 = [
    { name: 'Germany', value: 8940 },
    { name: 'USA', value: 5000 },
    { name: 'Greace', value: 7200 },
    { name: 'Spain', value: 7200 },
    { name: 'France', value: 7200 },
  ];
  showLegend = true;
  colorScheme:any;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  
  results1 = [
    { name: 'Germany1', value: 8940 },
    { name: 'USA1', value: 5000 },
    { name: 'France1', value: 7200 },
    { name: 'Germany2', value: 8940 },
    { name: 'USA2', value: 5000 },
    { name: 'France2', value: 7200 },
    { name: 'Germany3', value: 8940 },
    { name: 'USA3', value: 5000 },
    { name: 'France3', value: 7200 },
  ];
  results4b = [
    { name: 'Germany1', value: 8940 },
    { name: 'USA1', value: 5000 },
    { name: 'France1', value: 7200 }
  ];

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      }
    },
  };

  settingReport4 = {
    actions: {
      add: false,
      edit:false,
      delete:false
    },
    columns: {
      order: {
        title: 'Total Orders',
        type: 'number',
      },
      client: {
        title: 'Client',
        type: 'string',
      },
      state: {
        title: 'Order State',
        type: 'string',
      },
      category: {
        title: 'Category',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {
    this.colorScheme={
      domain: ['#917aff','#ff5f87', '#33e092','#339fff', '#ffb333']
    };
    this.startDate="";
    this.endDate="";
  }
  
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  updateTable(type: number, event: MatDatepickerInputEvent<Date>){
    if(type ==1){
      this.startDate=event.value;
    }
    else if(type ==2){
      this.endDate=event.value;
    }

    if(this.startDate!="" && this.endDate!=""){
      console.log(this.startDate);
      console.log(this.endDate);
    }
  }

}