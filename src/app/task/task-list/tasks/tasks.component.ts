import { Component, Input, OnChanges, SimpleChanges, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../../task';
import { Observable, Subscription, Subscriber } from 'rxjs';
import { DatePipe } from '@angular/common';
import { AttachSession } from 'protractor/built/driverProviders';

@Component({
  selector: 'ta-totvs-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnChanges, OnDestroy{
  
  @Input() task: Task[] = [];
  @Input() eventNewTask: Observable<Task>;
  @Input() eventLoadNewPage: Observable<Task[]>;
  @Input() eventChangeDisclaimers: Observable<Task[]>;
  @Input() eventQuickSearch: Observable<string>;


  private eventNewTaskSubscription: Subscription;
  private eventLoadNewPageSubscription: Subscription;
  private eventQuickSearchSubscription: Subscription;
  private eventChangeDisclaimersSubscription: Subscription;
  private filteredTasks: Task[];
  rows: any[] = [];

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    
    this.eventNewTaskSubscription = this.eventNewTask
      .subscribe(response => {
        this.addSingleTask(response);
    }); 

    this.eventLoadNewPageSubscription = this.eventLoadNewPage
      .subscribe(response => {
        this.addListTasks(response);
    });
      
    this.eventQuickSearchSubscription = this.eventQuickSearch
      .subscribe(data => this.onQuickSearchTasks(data, this.task));

    this.eventChangeDisclaimersSubscription = this.eventChangeDisclaimers
      .subscribe(() => this.onChangeDisclaimers());  
  }
  
  ngOnChanges(changes: SimpleChanges){
    
    if(changes.task){
      this.rows = this.groupColumns(this.task);
    }
  }

  ngOnDestroy() {
    this.eventNewTaskSubscription.unsubscribe();
    this.eventLoadNewPageSubscription.unsubscribe();
    this.eventQuickSearchSubscription.unsubscribe();
    this.eventChangeDisclaimersSubscription.unsubscribe();
  }

  groupColumns(task: Task[]){
    const newRows = [];

    for(let index = 0; index < task.length; index+=4){
      newRows.push(task.slice(index, index + 4));
    }
    return newRows;
  }

  addSingleTask(newTask){
    this.task.unshift(newTask);
    this.rows = this.groupColumns(this.task);  
  }

  addListTasks(listTasks : Task[]){
    this.task = [...this.task, ...listTasks];
    this.rows = this.groupColumns(this.task);  
  }

  onQuickSearchTasks(filter : string, currentTaskList : Task[]){

    filter = filter.trim().toLowerCase();

    this.filteredTasks = currentTaskList
      .filter(task => 
        task.title.toLowerCase().includes(filter) || 
        task.category.toLowerCase().includes(filter) || 
        this.datePipe.transform(task.deadline, 'dd/MM/yyyy').includes(filter));
     
        this.rows = this.groupColumns(this.filteredTasks);   
  }

  onChangeDisclaimers(){

    this.filteredTasks = [];
    this.rows = this.groupColumns(this.task); 
  }

  receiverEventPop(task){
    
    this.task.splice(this.task.findIndex((taskList) => taskList.id === task.id), 1);
    this.rows = this.groupColumns(this.task); 
  }

  receiverEventAlterTask(task){

    this.task.splice(this.task.findIndex((taskList) => taskList.id === task.id), 1, task);
    this.rows = this.groupColumns(this.task);
  }


}
