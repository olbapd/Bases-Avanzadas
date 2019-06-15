import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AgmComponent } from './agm.component';
import { AgmRoutingModule, routedComponents } from './agm-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminService } from '../../services/admin.service';
@NgModule({
  imports: [
    AgmRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCM39bNGEKQwoI78bzmcmNIfUmYzuGRJ00',
      libraries: ['places']
    })
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [AdminService]
})
export class AgmModule {
}
