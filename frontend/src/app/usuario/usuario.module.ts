import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsuarioComponent } from './usuario.component';

@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [UsuarioComponent]
})
export class UsuarioModule { }
