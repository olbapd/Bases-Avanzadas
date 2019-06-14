import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManagePlacesComponent } from './manage_places/mplaces.component';
import { MigrateComponent } from  './migrate_data/migrate.component';
import { QueriesComponent } from  './queries/queries.component';

const routes: Routes = [{ path: '', component: AdminComponent, 
      children: [
        { path: 'mplaces', component: ManagePlacesComponent },
        { path: 'migrate', component: MigrateComponent },
        { path: 'querie', component: QueriesComponent },
        {path: '', redirectTo: 'querie', pathMatch: 'full',},
        {path: '**', redirectTo: 'querie', pathMatch: 'full',}
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

export const routedComponents = [
  QueriesComponent,
  ManagePlacesComponent,
  MigrateComponent,
  AdminComponent
];