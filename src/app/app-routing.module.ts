import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo:'patients-cards', pathMatch:'full'
  },
  {
    path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
