import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { MigrateComponent } from  './migrate_data/migrate.component';
import { QueriesComponent } from  './queries/queries.component';
import { MapComponent } from  './maps/maps.component';
import {ProductsComponent} from './products/products.component'


const routes: Routes = [{ path: '', component: AdminComponent, 
      children: [
        { path: 'maps', component: MapComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'migrate', component: MigrateComponent },
        { path: 'querie', component: QueriesComponent },
        {path: '', redirectTo: 'maps', pathMatch: 'full',},
        {path: '**', redirectTo: 'maps', pathMatch: 'full',}
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
  QueriesComponent,
  MigrateComponent,
  AdminComponent,
  MapComponent,
  ProductsComponent
];
