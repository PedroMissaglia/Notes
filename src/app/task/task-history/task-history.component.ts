import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task';
import { PoTableColumn, PoTableAction, PoModalComponent, PoTableColumnSort, PoModalAction } from '@portinari/portinari-ui';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent implements OnInit {

  userId: number;
  completeTasks: Task[];
  delete: any;
  showMoreDisabled : boolean = false;
  currentPage: number = 1;
  filteredTaskHistory: Task[];
  auxTaskListHistory: Task[];
  previewTaskHistory: Task;
  
  columns : PoTableColumn[] = [
    {property: 'title', label: 'Título'}, 
    {property: 'detail', label: 'Descrição'},
    {property: 'category', label: 'Categoria'},
    {property: 'refdate', label: 'Data de Criação', type: 'date'},
    {property: 'deadline', label: 'Prazo Final', type: 'date'},
    {property: 'concludedDate', label: 'Data de Conclusão', type: 'date'},
    {property: 'concludedText', label: 'Comentário'}
    ]

  actions: Array<PoTableAction> = [
      { action: this.deleteModal.bind(this), icon: 'po-icon-delete', label: 'Excluir'}
    ];

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private datePipe: DatePipe) {    }

  ngOnInit() {

    this.userId = this.route.snapshot.params.userId;
    this.taskService.getCompletedTasks(this.userId, this.currentPage).subscribe( data => this.completeTasks = data);
  }

  confirm: PoModalAction = {
    action: () => {
        this.confirm.disabled;
        this.deleteTaskHistory();
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

  deleteModal(item){
    this.previewTaskHistory = item;
    this.poModal.open();

  }

  deleteTaskHistory(){
    this.taskService.deleteTaskHistory(this.previewTaskHistory).subscribe(() => {
      this.poModal.close();
      this.completeTasks.splice(this.completeTasks.findIndex((taskList) => taskList.id === this.previewTaskHistory.id), 1);
    })
  }


  showMore(sort: PoTableColumnSort) {
    this.taskService.getCompletedTasks(this.userId, ++this.currentPage).subscribe( data => {
      this.completeTasks = [...this.completeTasks, ...data]
      if (data.length < 9 ){
        this.showMoreDisabled = true;
      }})}

  onQuickSearch(filter: string){
    filter = filter.trim().toLowerCase();

    this.filteredTaskHistory = this.completeTasks
      .filter(task => 
        task.title.toLowerCase().includes(filter) || 
        task.category.toLowerCase().includes(filter) || 
        this.datePipe.transform(task.deadline, 'dd/MM/yyyy').includes(filter)); 
      
    this.auxTaskListHistory = this.completeTasks;
    this.completeTasks = this.filteredTaskHistory;
  
  }  

  onChangeDisclaimers() {
    this.completeTasks = this.auxTaskListHistory;
    this.auxTaskListHistory = [];
  }
}
