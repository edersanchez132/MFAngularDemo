import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostrardatosRoutingModule } from './mostrardatos-routing.module';
import { MostrardatosComponent } from './mostrardatos.component';


@NgModule({
  declarations: [
    MostrardatosComponent
  ],
  imports: [
    CommonModule,
    MostrardatosRoutingModule
  ]
})
export class MostrardatosModule { }
