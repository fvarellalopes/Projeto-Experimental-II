import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClienteComponent } from './cliente.component';

@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ClienteComponent]
})
export class ClienteModule { }
