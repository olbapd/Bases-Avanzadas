import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AgmComponent } from './agm.component';
import { AgmRoutingModule, routedComponents } from './agm-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    AgmRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyD9ZgAqbqfcy27LYpISyuIOZOpe0tMa4Fo'
    })
  ],
  declarations: [
    ...routedComponents
  ],
  providers: []
})
export class AgmModule {
}
