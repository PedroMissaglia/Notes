import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { SidebarMenuModule } from 'src/app/sidebar-menu/sidebar-menu.module';
import { RouterModule } from '@angular/router';
import { TaskListModule } from '../task-list/task-list.module';


@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    SidebarMenuModule,
    RouterModule,
    TaskListModule
  ]
})
export class FeedModule { }
