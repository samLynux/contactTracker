import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Student3Page } from './student3.page';

const routes: Routes = [
  {
    path: '',
    component: Student3Page
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Student3PageRoutingModule {}
