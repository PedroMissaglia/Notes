import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHistoryComponent } from './task-history.component';
import { PoModule } from '@portinari/portinari-ui';
import { PoPageDynamicSearchModule } from '@portinari/portinari-templates';


@NgModule({
  declarations: [TaskHistoryComponent],
  imports: [
    CommonModule,
    PoModule,
    PoPageDynamicSearchModule
  ],
  exports: [TaskHistoryComponent]
})
export class TaskHistoryModule { }
