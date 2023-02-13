import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrardatosComponent } from './mostrardatos.component';

const routes: Routes = [{
  path:'',
  component:MostrardatosComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostrardatosRoutingModule { }
