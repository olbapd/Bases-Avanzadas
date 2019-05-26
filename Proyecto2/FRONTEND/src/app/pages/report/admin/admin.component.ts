import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormBuilder, AbstractControl,Validators, FormGroup } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ReportService }  from '../../../services/report.service';
import { OrderService }  from '../../../services/order.service';
import { CatalogService }  from '../../../services/catalog.service';

@Component({
  selector: 'admin',
  styleUrls: ['./admin.component.scss'],
  templateUrl: './admin.component.html',
})

export class AdminComponent {
  startDate :any;
  endDate : any;

  showLegend = true;
  colorScheme:any;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  
  results1a :any;
  results1b :any;
  results3:any;
  results4b :any;
  showReport1a:any;
  showReport1b:any;
  showReport3:any;
  showReport4b:any;

  settings = {
    actions:{
      add:false,
      edit:false,
      delete:false
    },
    columns: {
      client: {
        title: 'ID',
        type: 'number',
      },
      min: {
        title: 'Smallest Order',
        type: 'number',
      },
      max: {
        title: 'Biggest Order',
        type: 'number',
      }
    },
    pager:{
      display:true,
      perPage:3
    }
  };

  settingReport4 = {
    actions: {
      add: false,
      edit:false,
      delete:false
    },
    columns: {
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
      },
      date:{
        title: 'Date Ordered',
        type: 'string'
      }
    },
    pager:{
      display:true,
      perPage:3
    }
  };

  source: LocalDataSource = new LocalDataSource();
  sourceOrders: LocalDataSource = new LocalDataSource();
  categories:any;

  constructor(private reportService : ReportService,
              private orderService: OrderService,
              private catalogService: CatalogService) {
    
    this.colorScheme={
      domain: ['#917aff','#ff5f87', '#33e092','#339fff', '#ffb333']
    };
    this.categories=[];
    this.startDate="";
    this.endDate="";
    this.results1a=[];
    this.results1b=[];
    this.results3=[];
    this.results4b=[];
    this.showReport1a=false;
    this.showReport1b=false;
    this.showReport3=false;
    this.showReport4b=false;

    this.reportService.report2()
      .subscribe((result)=>{
        if(result.status){
          for (let i = 0; i < result.data.length; ++i) {
            let temp={
              client: result.data[i].cliente_id,
              min: result.data[i].rango[0],
              max: result.data[i].rango[1],
            }
            if(temp.min==null){
              temp.min=0
            }
            if(temp.max==null){
              temp.max=0
            }
            this.source.append(temp);
          }
        }
      })

    this.reportService.report1()
      .subscribe((result)=>{
        if(result.status){
          for (let i = 0; i < result.data.length; ++i) {
            let temp={
              name: result.data[i].nombre,
              value: result.data[i].cantlibros,

            }
            let temp2={
              name: result.data[i].nombre,
              value: result.data[i].prom,

            }
            if(result.data[i].prom==null){
              temp2.value=0;
            }
            
            this.results1a.push(temp);
            this.results1b.push(temp2);
          }
          this.showReport1a=true;
          this.showReport1b=true;
        }

      });
    this.reportService.report3()
      .subscribe((result)=>{
        if(result.status){
          for (let i = 0; i < result.data.length; ++i) {
            let temp={
              name: result.data[i].nombre,
              value: result.data[i].cantidad
            }
            this.results3.push(temp);
          }
          this.showReport3=true;
        }

      });

    this.reportService.report4()
      .subscribe((result)=>{
        if(result.status){
          for (let i = 0; i < result.data.length; ++i) {
            let temp={
              name: result.data[i].cliente_id,
              value: result.data[i].cantidad
            }
            this.results4b.push(temp);
          }
          this.showReport4b=true;
        }        
      })

    this.catalogService.getCategories()
      .subscribe((result)=>{
        if(result.status){
          this.categories = result.data;
          this.orderService.getAllOrders()
          .subscribe((result2)=>{
            if(result2.status){
              for (let i = 0; i < result2.data.length; ++i) {
                let temp={
                  client: result2.data[i].cliente,
                  state: result2.data[i].estado,
                  date: result2.data[i].fechaPedido,
                  category: result2.data[i].tema, 
                }
                let cat="";                
                for (let j = 0; j < temp.category.length; ++j) {
                  for (let k = 0; k < this.categories.length; ++k) {
                    if(temp.category[j] == this.categories[k]._id){
                      cat=cat+this.categories[k].nombre+" "
                    }
                  }
                }
                temp.category= cat;
                this.sourceOrders.append(temp);
              }
            }
          })
        }
      })   
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