import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { PoPageLoginModule } from '@portinari/portinari-templates';
import { PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';
import { PoFieldModule } from '@portinari/portinari-ui';
import { PoButtonModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule,
    PoFieldModule,
    PoButtonModule,
    RouterModule

  ],
  exports: [LoginComponent]
})
export class LoginModule { }
