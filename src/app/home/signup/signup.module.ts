import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PoModule } from '@portinari/portinari-ui';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PoModule

  ]
})
export class SignupModule { }
