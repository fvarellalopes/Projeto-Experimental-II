import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChamadoComponent } from './chamado.component';

@NgModule({
  declarations: [
    ChamadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChamadoComponent]
})
export class ChamadoModule { }
