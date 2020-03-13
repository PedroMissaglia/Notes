import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { CardModule } from 'src/app/shared/card/card.module';
import { PoModule  } from '@portinari/portinari-ui';


@NgModule({
  declarations: [TasksComponent],
  imports: [
    CommonModule,
    CardModule,
    PoModule,

  ],
  exports: [TasksComponent]
})
export class TasksModule { }
