import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '' , 
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: LoginComponent
          },
          {
            path: 'signup',
            component: SignupComponent
          }     
        ]},
];


@NgModule({
    imports: [ 
        RouterModule.forChild(routes),],
    exports: [ RouterModule ]
})

export class HomeRoutingModule { }