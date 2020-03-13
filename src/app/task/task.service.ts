import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from './task';
import { FormGroup } from '@angular/forms';
import { map, subscribeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PoPageDynamicTableField } from '@portinari/portinari-templates';
import { DatePipe } from '@angular/common';


const API = 'http://localhost:3001/task';

@Injectable({providedIn: 'root'})
export class TaskService {
 
    emitirTaskCriada = new EventEmitter<Task>();
    static criouNovaTask = new EventEmitter<Task>();
    array : Task[];
    currentDate: string;

    constructor(
        private http: HttpClient,
        private datePipe: DatePipe){}

    getPendingTasks(userId: number, page: number){

        let params = new HttpParams();
        params = params.append('ownerId', userId.toString());
        params = params.append('_limit', '9');
        params = params.append('_page', page.toString());
        params = params.append('status', 'pending');
        params = params.append('_sort', 'refdate')
        
        return this.http.get<Task[]>(API ,{params});
    }

    getCompletedTasks(userId: number, page: number ){

        let params = new HttpParams();

        params = params.append('ownerId', userId.toString());
        params = params.append('_limit', '9');
        params = params.append('_page', page.toString());
        params = params.append('status', 'closed');
        params = params.append('_sort', 'concludedDate');
        params = params.append('_order', 'desc');


        return this.http.get<Task[]>(API, {params});
    }

    addTask(form : FormGroup, currentDate: string, userId){

        currentDate = this.datePipe.transform(currentDate, "yyyy-dd-MM");
        return this.http.post<Task[]>(API, 
            {   
                ownerId: userId,
                title: form.get('title').value,
                detail: form.get('description').value,
                deadline: form.get('deadline').value,
                category: form.get('category').value,
                refdate: currentDate,
                status: 'pending'})
    }

    finishDate(id, form){
        this.currentDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
        return this.http.patch<Task[]>(API + `/${id}`, 
            {   
                status: 'closed',
                concludedDate: this.currentDate,
                concludedText: form.get('concludedText').value
            })
    }

    updateTask(id, form){
        
        return this.http.patch<Task[]>(API + `/${id}`,
            {
                title: form.get('title').value,
                detail: form.get('description').value,
                deadline: form.get('deadline').value,
                category: form.get('category').value,
            })
    }

    deleteTaskHistory(task: Task){
        return this.http.delete<Task[]>(API + `/${task.id}`)
    }


       
}