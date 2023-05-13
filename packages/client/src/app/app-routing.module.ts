import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {authGuard} from '../app/auth/auth.guard';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'todos',
    pathMatch:'full'
  },
  {
    path: 'login',
    component:LoginComponent, 
  
  },
  {
    path:'todos',
    component:TodosComponent,
    canActivate:[authGuard]
  },
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {
    
}
