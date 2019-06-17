import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AdminComponent } from './admin.component';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FotoService } from '../../services/foto.service';



import { AdminService } from '../../services/admin.service';
@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
    Ng2SearchPipeModule,
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
  providers: [AdminService,FotoService]
})
export class AdminModule {
}
