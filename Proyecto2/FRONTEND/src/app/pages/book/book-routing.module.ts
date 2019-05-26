import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ViewComponent } from './view/view.component';

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
      path: 'view',
      component: ViewComponent,
    },{
      path: '',
      redirectTo: 'main',
      pathMatch: 'full',
    }, {
      path: '**',
      redirectTo: 'main',
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
  EditComponent,
  ViewComponent
];
