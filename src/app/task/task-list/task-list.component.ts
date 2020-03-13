import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PoSelectOption, PoDatepickerComponent } from '@portinari/portinari-ui';

@Component({
  selector: 'ta-totvs-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  
  eventNewTaskSubject: Subject<Task> = new Subject<Task>();
  eventLoadNewPageSubject: Subject<Task[]> = new Subject<Task[]>();
  eventQuickSearchSubject: Subject<string> = new Subject<string>();
  eventChangeDisclaimersSubject: Subject<Task[]> = new Subject<Task[]>();
  task: Task[] = [];
  currentPage: number = 1;
  hasMore: boolean = true;
  @ViewChild(PoDatepickerComponent, {static: true}) datepicker: PoDatepickerComponent; 

  public readonly iconOptions: Array<PoSelectOption> = [
    {value: 'Estudos', label: 'Estudos'},
    {value: 'Trabalho', label: 'Trabalho'},
    {value: 'Alimentação', label: 'Alimentação'},
    {value: 'Lazer', label: 'Lazer'}];
      
  constructor(
	private taskService: TaskService,
	private activatedRoute: ActivatedRoute){
  } 
  
	
  ngOnInit(): void {
    this.taskService
	  .getPendingTasks(this.activatedRoute.snapshot.params.userId , this.currentPage)
    .subscribe(data => 
      this.task = data);
  }

  onQuickSearch(filter) {
    filter ?  this.eventQuickSearchSubject.next(filter) : console.log(filter);
    
  }

  onChangeDisclaimers(){
    this.eventChangeDisclaimersSubject.next();
  }


  receiverTask(respostaTask){
    this.eventNewTaskSubject.next(respostaTask);
  }

  receiverEventLoad(){
    
    this.taskService
	  .getPendingTasks(this.activatedRoute.snapshot.params.userId, ++this.currentPage)
    .subscribe(data => {
      this.eventLoadNewPageSubject.next(data)
      if(data.length < 9)
        this.hasMore = false;});
  }

}
