import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../task.service';

@Component({
    selector: 'ta-totvs-load',
    templateUrl: './load-tasks.component.html'
})
export class LoadTasksComponent implements OnInit{

    @Output() sendEventLoad = new EventEmitter<any>();
    @Input() hasMore: boolean;

    currentPage: number = 1;
    userId: number;

    constructor(
        private route: ActivatedRoute
    ){}

    ngOnInit() {
        this.userId = this.route.snapshot.params.userId;
    }
    
    load(){
        this.sendEventLoad.emit();
    }

}