import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoWidgetModule, PoModule } from '@portinari/portinari-ui';

import { CardComponent } from './card.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigComponent } from './config/config.component';


@NgModule({
  declarations: [CardComponent,ConfirmComponent, ConfigComponent],
  imports: [
    CommonModule,
    PoWidgetModule,
    PoModule,
    ReactiveFormsModule
  ],
  exports: [CardComponent,ConfirmComponent, ConfigComponent]
})
export class CardModule { }
