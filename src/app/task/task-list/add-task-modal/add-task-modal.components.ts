import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { PoModalComponent, PoModalAction, PoSelectOption, PoNotificationService } from '@portinari/portinari-ui';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../task.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'ta-totvs-add-task-modal',
    templateUrl: './add-task-modal.component.html'
})
export class AddTaskModalComponent implements OnInit{

    @Output() sendEventTask = new EventEmitter<any>();
    
    title: string = "Adicionar Tarefa";
    taskForm: FormGroup;
    textarea: string;
    currentDate: Date = new Date();
    datRef: string;
    userId: number;
    deadline: string;
    showButton: boolean = false;

    configDisable: boolean = false;
    confirmDisable: boolean = false;


    public readonly iconOptions: Array<PoSelectOption> = [
        {value: 'Estudos', label: 'Estudos'},
        {value: 'Trabalho', label: 'Trabalho'},
        {value: 'Alimentação', label: 'Alimentação'},
        {value: 'Lazer', label: 'Lazer'}];

    
    @ViewChild(PoModalComponent, {static: true}) poModal : PoModalComponent;
 
    constructor(
        private formBuilder: FormBuilder,
        private datePipe: DatePipe,
        private taskService: TaskService,
        private poNotification: PoNotificationService,
        private activatedRoute: ActivatedRoute){}

    
    ngOnInit(){
        this.taskForm = this.formBuilder.
            group({
                title: ['', Validators.required],
                description: [
                    '',
                    [
                        Validators.required, 
                        Validators.maxLength(300)
                    ]],
                deadline: ['', Validators.required],
                category: ['', Validators.required]})   
                
        this.datRef = this.datePipe.transform(this.currentDate, "dd/MM/yyyy");      
                    
        this.userId = parseInt(this.activatedRoute.snapshot.params.userId);
    }   
    
     
    modalOpen(){
        this.poModal.open();
    }
    
    confirm: PoModalAction = {
        action: () => {
            this.addTask();
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
    
    addTask() {

        if(this.taskForm.status == 'VALID'){
            this.taskService
            .addTask(this.taskForm, this.datRef, this.userId)
            .subscribe((response) => {
                
                this.sendEventTask.emit(response);
                this.taskForm.reset();
                this.poModal.close();
                this.poNotification.success('Tarefa incluída com sucesso');
            },
            (err) => this.poNotification.error(err) );
        }
        else{
            this.poNotification.error('Formulário de inclusão inválido');
        }
    }

}