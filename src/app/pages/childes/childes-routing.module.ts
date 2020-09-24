import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildesPage } from './childes.page';

const routes: Routes = [
  {
    path: '',
    component: ChildesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildesPageRoutingModule {}
