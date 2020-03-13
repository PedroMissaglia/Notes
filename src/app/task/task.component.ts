import { Component, Input } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'ta-totvs-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: Task[] = [];

  constructor() { }

}
