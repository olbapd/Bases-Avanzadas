import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AdminComponent } from './admin.component';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AdminService } from '../../services/admin.service';
@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
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
export class AdminModule {
}
