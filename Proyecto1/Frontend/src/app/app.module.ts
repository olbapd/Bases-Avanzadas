import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http'; 
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from 'jquery';
import {MatDialogModule} from '@angular/material/dialog';
import { HomeEmployeeComponent } from './employeeHome.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './services/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeEmployeeComponent,
    FilterPipe
  ],
  imports: [
    
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    HttpClientModule,
    MatDialogModule,
    
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
