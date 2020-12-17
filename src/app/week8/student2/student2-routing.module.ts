import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Student2Page } from './student2.page';

const routes: Routes = [
  {
    path: '',
    component: Student2Page
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
export class Student2PageRoutingModule {}
