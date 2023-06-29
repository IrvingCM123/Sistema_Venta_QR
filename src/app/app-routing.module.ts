import { ViewModule } from './views/View.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'Sistema', pathMatch: 'full'},
  { path: 'Sistema', loadChildren: () => import('./views').then(m => m.ViewModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
