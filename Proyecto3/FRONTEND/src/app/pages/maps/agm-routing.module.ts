import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgmComponent } from './agm.component';
import { MapComponent } from './agm/maps.component';

const routes: Routes = [{
    path: '', component: AgmComponent,
    children: [
        { path: 'maps', component: MapComponent },
        { path: '', redirectTo: 'move', pathMatch: 'full', },
        { path: '**', redirectTo: 'move', pathMatch: 'full', }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgmRoutingModule { }

export const routedComponents = [
    MapComponent,
    AgmComponent
];
