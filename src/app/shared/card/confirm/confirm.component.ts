import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { PoModalComponent, PoModalAction, PoNotificationService } from '@portinari/portinari-ui';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TaskService } from 'src/app/task/task.service';
import { Task } from 'src/app/task/task';

@Component({
  selector: 'ta-totvs-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Input() taskId: number;
  @Input() taskTitle : string;
  @Input() taskDetail: string;
  @Input() taskCategory : string;
  @Input() taskDeadline: string;

  @Output() sendEventPop = new EventEmitter<Task[]>();

  modalText: string = 'Confirma a conclusão da tarefa?';
  taskConcludeForm: FormGroup;
  currentDate: Date = new Date();

  @ViewChild(PoModalComponent, {static: true}) poModal : PoModalComponent; 
  
  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private taskService: TaskService,
    private poNotification: PoNotificationService) { }

  ngOnInit() {
    this.taskConcludeForm = this.formBuilder
      .group({
                concludedDate: [],
                concludedText: ['', Validators.required]
      })

  }

  confirm: PoModalAction = {
    action: () => {
      this.finishTask();
    },
    label: 'Sim'
  };

  close: PoModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Não',
    danger: true
  };
  
  modalOpen(){
    this.poModal.open();
  }

  modalClose(){
    this.poModal.close();
  }


  finishTask(){
    if(this.taskConcludeForm.status == 'VALID')
      this.taskService.finishDate(this.taskId, this.taskConcludeForm)
        .subscribe(res => {
          this.sendEventPop.emit(res);
          this.taskConcludeForm.reset();
          this.poModal.close();
          this.poNotification.success('Tarefa concluída com sucesso');
        })
    else{
      this.poNotification.error('Formulário inválido');
    }    
  }

}

