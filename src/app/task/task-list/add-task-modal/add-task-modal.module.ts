import { NgModule } from '@angular/core';
import { AddTaskModalComponent } from './add-task-modal.components';
import { CardModule } from 'src/app/shared/card/card.module';
import { CommonModule, DatePipe } from '@angular/common';
import { PoModule } from '@portinari/portinari-ui';
import { ReactiveFormsModule } from '@angular/forms';
import { PoFieldModule } from '@portinari/portinari-ui';

@NgModule({
    declarations: [
        AddTaskModalComponent
    ],
    imports: [
        CommonModule, 
        CardModule,
        PoModule,
        ReactiveFormsModule,
        PoFieldModule],
    exports: [AddTaskModalComponent],
    providers: [DatePipe]
})
export class AddTaskModalModule {}