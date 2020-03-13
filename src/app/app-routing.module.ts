import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task/task-list/task-list.component';
import { FeedComponent } from './task/feed/feed.component';
import { TaskHistoryComponent } from './task/task-history/task-history.component';

const routes: Routes = [
    
  {path: '',
    pathMatch: 'full',
    redirectTo: 'home'},
  {path: 'home',
    loadChildren: './home/home.module#HomeModule'},
  {
    path: 'feed/:userId',
    component: FeedComponent,
    children: [
      {
        path: 'task-list/:userId',
        component: TaskListComponent
      },
      {
        path: 'history/:userId',
        component: TaskHistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
