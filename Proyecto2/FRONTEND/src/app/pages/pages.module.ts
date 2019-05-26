import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../app.module';
import { CatalogService} from '../services/catalog.service';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    MaterialModule,
    CommonModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ],
  providers: [
  	CatalogService
  ]
})
export class PagesModule {
}
