import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/tabs/index',
    pathMatch: 'full'
  },
  {
    path: ':tabs',
    component:HomePage,
    children: [
      {
        path: 'index',
        loadChildren: () => import('../week9/index/index.module').then( m => m.IndexPageModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('../maps/maps.module').then( m => m.MapsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
    ]
  },
  
  {
    path: 'insert',
    loadChildren: () => import('../week9/insert/insert.module').then( m => m.InsertPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../week11/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../week11/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../week11/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: ':key',
    loadChildren: () => import('../week9/edit/edit.module').then( m => m.EditPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
