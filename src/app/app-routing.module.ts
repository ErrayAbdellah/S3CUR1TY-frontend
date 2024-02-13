import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { authGuard } from './_guards/authGuard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'test', component:TestComponent,canActivate: [authGuard,authGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
