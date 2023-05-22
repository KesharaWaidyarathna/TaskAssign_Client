import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{

newtasks: task[]=[];
taskToEdit?: task;

constructor(private taskService:TaskService){

}

ngOnInit(): void {
  this.taskService
  .getTasks()
  .subscribe(
    {
      next:(tasks)=>{
        this.newtasks=tasks;
      },error:(response)=>{
        console.log(response);
      }
    });
}

}
