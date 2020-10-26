import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/no-login.guard';


const routes: Routes = [
   {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./paginas/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'login', canActivate: [NoLoginGuard],
    loadChildren: () => import('./paginas/chat/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio-login',  canActivate: [AuthGuard],
    loadChildren: () => import('./pages/inicio-login/inicio-login.module').then( m => m.InicioLoginPageModule)
  },
  {
    path: 'registro', canActivate: [NoLoginGuard],
    loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
