import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './core/layouts/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
git commit -m "adding assets, and creating not-found component
