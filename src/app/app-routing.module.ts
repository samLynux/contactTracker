import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' 
  },
  {
    path: 'student1',
    loadChildren: () => import('./week8/student1/student1.module').then( m => m.Student1PageModule)
  },
  {
    path: 'student2',
    loadChildren: () => import('./week8/student2/student2.module').then( m => m.Student2PageModule)
  },
  {
    path: 'student3',
    loadChildren: () => import('./week8/student3/student3.module').then( m => m.Student3PageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./week9/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'insert',
    loadChildren: () => import('./week9/insert/insert.module').then( m => m.InsertPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./week11/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./week11/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./week11/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
