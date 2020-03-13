import { PipeTransform, Pipe } from '@angular/core';
import { Task } from '../task';

@Pipe({name: 'filterbyTitle'})
export class FilterByTitle implements PipeTransform{
    
    transform(task: Task[], titleQuery: string) {
        titleQuery = titleQuery.trim().toLowerCase();

        if(titleQuery){
            return task.filter(task => 
                task.title.toLowerCase().includes(titleQuery));
        }
        else{
            return task;
        }
    }
}
