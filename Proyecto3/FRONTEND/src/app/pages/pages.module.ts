import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ClientRoutingModule } from './client/client-routing.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ClientRoutingModule,
    CommonModule
  ],
  declarations: [
    ...PAGES_COMPONENTS
  ],
  providers: [
  ]
})
export class PagesModule {
}
