import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalComponent, PoSelectOption, PoModalAction, PoNotificationService } from '@portinari/portinari-ui';
import { TaskService } from 'src/app/task/task.service';
import { Task } from 'src/app/task/task';

@Component({
  selector: 'ta-totvs-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  @Input() taskId: number;
  @Input() taskTitle: string;
  @Input() taskDetail: string;
  @Input() taskCategory: string;
  @Input() taskDeadline:string;
  @Output() sendEventAlterTask = new EventEmitter<Task[]>();
  
  taskConfigForm : FormGroup;
  currentDate: Date = new Date();
  modalText: string = 'Configurações da Tarefa';

  


  @ViewChild(PoModalComponent, {static: true}) poModal : PoModalComponent; 
  
  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private poNotification: PoNotificationService) { }

  public readonly iconOptions: Array<PoSelectOption> = [
    {value: 'Estudos', label: 'Estudos'},
    {value: 'Trabalho', label: 'Trabalho'},
    {value: 'Alimentação', label: 'Alimentação'},
    {value: 'Lazer', label: 'Lazer'}];

  ngOnInit() {
    this.taskConfigForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        description: ['',Validators.required],
        deadline: ['',Validators.required],
        category: ['',Validators.required]
      }
    )
  }

  confirm: PoModalAction = {
    action: () => {
        this.updateTask();
        this.confirm.disabled;
    },
    label: 'Confirmar'
  };

  close: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Cancelar',
    danger: true
  }; 


  modalOpen(){
    this.taskConfigForm.setValue({
      title: this.taskTitle,
      description: this.taskDetail,
      deadline: '',
      category: this.taskCategory
    });
    this.poModal.open();
  }


  updateTask(){
    if(this.taskConfigForm.status == 'VALID'){
      this.taskService.updateTask(this.taskId, this.taskConfigForm).subscribe(
        res => {
          this.sendEventAlterTask.emit(res);
          this.taskConfigForm.reset();
          this.poModal.close();
          this.poNotification.success('Tarefa alterada com sucesso');} 
      )
    }
    else{
      this.poNotification.error('Formulário inválido.');
    }
  }
}