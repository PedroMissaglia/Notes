import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list.component';
import { SidebarMenuModule } from 'src/app/sidebar-menu/sidebar-menu.module';
import { TasksModule } from './tasks/tasks.module';
import { FilterByTitle } from './filterbyTitle.pipe';
import { PoPageDynamicSearchModule } from '@portinari/portinari-templates';
import { AddTaskModalModule } from './add-task-modal/add-task-modal.module';
import { LoadTasksModule } from './load-tasks/load-tasks.module';
import { CardModule } from 'src/app/shared/card/card.module';
@NgModule({
  declarations: [
    TaskListComponent,
    FilterByTitle],
  imports: [
    CommonModule,
    SidebarMenuModule,
    TasksModule,
    PoPageDynamicSearchModule,
    AddTaskModalModule,
    LoadTasksModule,
    CardModule
    
    

  ],
  exports: [
    TaskListComponent
  ]
})
export class TaskListModule { }
