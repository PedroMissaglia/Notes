import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Injectable({providedIn: 'root'})
export class TaskListResolver implements Resolve<Observable<Task[]>>{
    
    constructor(private service: TaskService) {}

    resolve(route: ActivatedRouteSnapshot){

        const userId = route.params.userId;

        return null;

    }
}