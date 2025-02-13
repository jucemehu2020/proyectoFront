import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  redirectTo: '/home',
  pathMatch: 'full'
},
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) }, 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
