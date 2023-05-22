import { Injectable } from '@angular/core';
import { task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviorment } from 'src/enviorments/enviorment';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url="task";
  constructor(private http:HttpClient) { }

  public getTasks() : Observable<task[]> {
    return this.http.get<task[]>(`${enviorment.url}/${this.url}/GetTasks`)

  }
  public getTask(id:number) : Observable<task> {
    return this.http.get<task>(`${enviorment.url}/${this.url}/GetTaskById/?taskId=${id}`)

  }

  public deleteTask(id:number) {
    return this.http.delete(`${enviorment.url}/${this.url}/DeleteTask/?taskId=${id}`)

  }

  public createTask(task: task){
    return this.http.post(`${enviorment.url}/${this.url}/CreateTask`,task);
  }

  public updateTask(task: task){
    return this.http.put(`${enviorment.url}/${this.url}/UpdateTask`,task);
  }
}
