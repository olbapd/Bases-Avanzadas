import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { AgregarComponent } from './agregar/agregar.component';

const routes: Routes = [{
  path: '',
  component: BookComponent,
  children: [
    {
      path: 'edit',
      component: EditComponent,
    },{
      path: 'main',
      component: MainComponent,
    },
    {
      path: 'agregar',
      component: AgregarComponent,
    },{
      path: '',
      redirectTo: 'agregar',
      pathMatch: 'full',
    }, {
      path: '**',
      redirectTo: 'agregar',
      pathMatch: 'full',
    }    
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule { }

export const routedComponents = [
  BookComponent,
  MainComponent,
  AgregarComponent,
  EditComponent
];
