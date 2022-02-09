import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaCalendarComponent } from './calendario/vistaCalendar/vistaCalendar.component';

const routes: Routes = [{
  path:'',
  redirectTo: '/home',
  pathMatch: 'full'
},
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'caidalibre', loadChildren: () => import('./labs/caidalibre/caidalibre.module').then(m => m.CaidalibreModule) },
  { path: 'leyhooke', loadChildren: () => import('./labs/leyhooke/leyhooke.module').then(m => m.LeyhookeModule) },
  { path: 'movparabolico', loadChildren: () => import('./labs/movparabolico/movparabolico.module').then(m => m.MovparabolicoModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
