import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { MostrardatosModule } from './mostrardatos/mostrardatos.module';

const routes: Routes = [{
  path:'',
  component:DefaultComponent
},
{
  path:'mf', loadChildren : () =>import('./mostrardatos/mostrardatos.module').then((m)=>m.MostrardatosModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
