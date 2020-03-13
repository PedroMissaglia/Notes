import { NgModule } from '@angular/core';
import { LoadTasksComponent } from './load-tasks.component';
import { CommonModule } from '@angular/common';
import { PoModule } from '@portinari/portinari-ui';

@NgModule({
    declarations: [LoadTasksComponent],
    imports: [
        CommonModule,
        PoModule],
    exports: [LoadTasksComponent]
})
export class LoadTasksModule {}