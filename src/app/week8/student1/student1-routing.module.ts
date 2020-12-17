import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Student1Page } from './student1.page';

const routes: Routes = [
  {
    path: '',
    component: Student1Page
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },
  {
    path: ':studentNIM',
    loadChildren: () => import('./form-update/form-update.module').then( m => m.FormUpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Student1PageRoutingModule {}
