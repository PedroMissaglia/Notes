import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    imports: [
        LoginModule,
        SignupModule,
        RouterModule,
        HomeRoutingModule],
    declarations: [HomeComponent],
    exports: [LoginModule, SignupModule]
})
export class HomeModule {}