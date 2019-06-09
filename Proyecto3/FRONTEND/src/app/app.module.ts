import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgmCoreModule} from '@agm/core';
import {ClientComponent} from './pages/client/client.component'

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyD9ZgAqbqfcy27LYpISyuIOZOpe0tMa4Fo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
