import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PoNotificationService, PoModalComponent } from '@portinari/portinari-ui';
import { Task } from 'src/app/task/task';

@Component({
  selector: 'ta-totvs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() title: string = '';
  @Input() detail: string = '';
  @Input() datRef: string;
  @Input() deadline: string;
  @Input() size: number;
  @Input() category: string;
  @Input() isTaskList: boolean = true;
  @Input() id: number;

  @Output() sendEventPop = new EventEmitter<Task[]>();
  @Output() sendEventAlterTask = new EventEmitter<Task[]>();


  private alertStatus: boolean = false;
  private currentDate: string;
  
  constructor(
    private datePipe: DatePipe,
    private poNotification: PoNotificationService) { }

  ngOnInit(): void {
    this.currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');

    if(this.currentDate >= this.deadline)
      this.alertStatus = true;
  }

  confirm() {
    this.poNotification.success('Purchase done Successful!');
  }

  receiverEventPop(task){
    this.sendEventPop.emit(task);
  }

  receiverAlterTask(task){
    this.sendEventAlterTask.emit(task);
  };

}
