import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { PoModule } from '@portinari/portinari-ui';
import { TaskListModule } from './task-list/task-list.module';
import { TaskHistoryModule } from './task-history/task-history.module';

@NgModule({
  declarations: [
    TaskComponent],
  imports: [
    CommonModule,
    PoModule,
    TaskListModule,
    TaskHistoryModule
  ],
  exports: [TaskComponent]
})
export class TaskModule { }
