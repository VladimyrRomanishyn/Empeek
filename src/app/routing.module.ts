import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'detail', component: DetailComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent},

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}